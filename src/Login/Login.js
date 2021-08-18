import React, {useState, useEffect, useRef} from "react";
import poster from "../assets/poster.png"
import "./login.scss";
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import logo from "../assets/logo.png"
import google from "../assets/google.png"
import appstore from "../assets/appstore.png";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { handleLogin } from "../Redux/actions/loginAction";
import { userAct } from "../Redux/actions/userAction";
import { login } from "../Services/userService";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";

const eye = <FontAwesomeIcon icon={faEye} />;
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Kolom tidak boleh kosong!
      </div>
    );   
  }
};

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [statusText, setStatusText] = useState("");
    const [val, setVal] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory()
    const dispatch = useDispatch();
    const form = useRef();

    const handleClick = () => {
        history.push("/signup");
    }

    const loginHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        form.current.validateAll();
        dispatch(
            handleLogin({
                email: email,
                password: password,
                statusText: statusText,
            })
        );
        const store = window.localStorage;

    login(email, password)
      .then((response) => {
        store.setItem("token", response.user.token);
        setStatusText(response.statusText);
        console.log(response);
        const { email, token, statusText } = response;
        const decode = jwt_decode(token);
        console.log(decode);
        const temp = { token };
        store.setItem("data", JSON.stringify(temp));
        // const temp = { email, password, token };
        // console.log(temp, "temp");
        // console.log(response, "response");
        // store.setItem("data", JSON.stringify(temp));
        // dispatch(userAct({ email, token }));
        dispatch(userAct(token));
        console.log(statusText);
        
      })

      .catch((error) => {
        console.log(error);
        setLoading(false);
      });


    }

    useEffect(() => {
    if (statusText === "Success") {
      setVal(false);
      // setLoading(true);
      history.push("/home");
    } else if (statusText === "") {
      setVal(false);
      // setLoading(true);
    } else if (statusText !== "Success") {
      setVal(true);
      setLoading(false);
    }
  }, [statusText]);
  console.log(statusText, "status");


    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div className="login">
            <div className="left">
                <img src={poster} width="400" height="680"></img>
            </div>
            <div className="right">
                <div className="box-1">
                    <img src={logo} width="220" height="140"></img>
                    <Form onSubmit={loginHandler} ref={form}>
                        <div className="kolom">
                            <Input
                            placeholder="Email"
                            value={email}
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            validations={[required]}
                            ></Input>
                            <div className="password">
                                <Input
                                    value={password}
                                    placeholder="Password"
                                    type={passwordShown ? "text" : "password"}
                                    onChange={(e) => setPassword(e.target.value)}>
                                </Input>
                                <i onClick={togglePasswordVisiblity}>{eye}</i>
                            </div>
                        </div>
                        <div className="val_form">
                            {val && <span className="validasi">invalid email or password</span>}
                        </div>
                    </Form>
                    <div className="btn-login" type="submit" onClick={loginHandler} disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>

                    </div>
                </div>
                <div className="box-2">
                    <div className="text1">Dont have an account? 
                        <a href="" onClick={handleClick}>{" "}Signup</a>
                    </div>
                </div>
                <div className="download">
                    <p>Get App</p>
                    <div className="logo-apps">
                        <img src={appstore} width="150" height="50"></img>
                        <img src={google} width="150" height="50"></img>
                    </div>
                </div>
 
            </div>
        </div>
    )
}

export default Login;