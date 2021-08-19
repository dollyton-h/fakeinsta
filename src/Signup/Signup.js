import React, {useState, useRef} from "react";
import poster from "../assets/poster.png"
import "./signup.scss";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.png"
import google from "../assets/google.png"
import appstore from "../assets/appstore.png"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { register } from "../Services/userService";

const eye = <FontAwesomeIcon icon={faEye} />;

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const form = useRef();
    const history = useHistory();


    const [passwordShown, setPasswordShown] = useState(false);
    
const handleSubmit = (e) => {
    // console.log(data);
    history.push("/");

    e.preventDefault();
    setLoading(true);

    form.current.validateAll();

    const store = window.localStorage;
    register(email, username, password)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      alert("register is success")
  };


    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div className="signup">
            <div className="left-side">
                <img src={poster} width="400" height="680"></img>
            </div>
            <div className="right-side">
                <div className="box-3">
                    <img src={logo} width="220" height="140"></img>
                    <p>Create an account</p>
                    <Form onSubmit={handleSubmit} ref={form}>
                        <div className="column">
                            <Input
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                // validations={[required]}

                            ></Input>
                            <Input
                                placeholder="Username"
                                type="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}>
                            </Input>
                            <div className="pass-sign">
                                <Input
                                    placeholder="Password"
                                    type={passwordShown ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></Input>
                                <i onClick={togglePasswordVisiblity}>{eye}</i>
                            </div>
                        </div>
                    </Form>
                    <div className="btn-signup" type="submit" onClick={handleSubmit} disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Signup</span>
                    </div>

                    <div className="terms">By registering, you agree to our Terms, Data Policy and Cookie Policy.</div>
                </div>
                <div className="box-4">
                    <div className="text">Already have an account? 
                        <a>{" "}Login</a>
                    </div>
                </div>
                <div className="downloads">
                    <p>Get App</p>
                    <div className="logo-app">
                        <img src={appstore} width="150" height="50"></img>
                        <img src={google} width="150" height="50"></img>
                    </div>
                </div>
 
            </div>
        </div>
    )
}

export default Signup;