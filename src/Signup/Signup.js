import React, {useState} from "react";
import poster from "../assets/poster.png"
import "./signup.scss";
import logo from "../assets/logo.png"
import google from "../assets/google.png"
import appstore from "../assets/appstore.png"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

const Signup = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    
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
                    <img src={logo} width="220" height="90"></img>
                    <p>Create an account</p>
                    <Form>
                        <div className="column">
                            <Input
                                placeholder="Email"></Input>
                            <Input
                                placeholder="Username"></Input>
                            <div className="pass-sign">
                                <Input
                                    placeholder="Password"></Input>
                                <i onClick={togglePasswordVisiblity}>{eye}</i>
                            </div>
                        </div>
                    </Form>
                    <div className="btn-signup">Signup</div>
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