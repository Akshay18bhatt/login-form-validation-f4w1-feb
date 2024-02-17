import React, { useState } from "react";
import ConfirmPassword from "./ConfirmPassword";


const Password= ({setIsPassword, setIsConfirmPassword})=>{

    const [myPassword, setMyPassword] = useState("");
    let finalPassword;
    let isValidPassword= false;



    //        Validating if password is good to go for submiting

    function passwordBlurred(e){
        // console.log("password blur is working");
        if(e.key==="Enter"){
            if(isValidPassword){
                setIsPassword(true);
            }
            else{
                setIsPassword(false);
            }
        }
        else{
            if(isValidPassword){
                setIsPassword(true);
            }
            else{
                setIsPassword(false);
            }
        }
    }
    // ///////////////////////////////////////////////////////////////

    function onPasswordInput(e){
        setMyPassword((e.target.value).trim());
    }
    if(myPassword.length>=8){
        isValidPassword= true;
        finalPassword= myPassword;

    }
    else{
        isValidPassword= false;
    }

    return(
        <div>
            <div className="input-container">
                <h3>Password:</h3>
                <input 
                    type="password"
                    placeholder="Enter password"
                    onChange={onPasswordInput}
                    onBlur={passwordBlurred}
                    onKeyUp={passwordBlurred}
                    style={isValidPassword? {border: "3px solid green"}: {border: "3px solid red"}}
                />
                <p>{isValidPassword ? "": "Password must be of atleast 8 characters" }</p>
            </div>

            <div>
                <ConfirmPassword  finalPassword={finalPassword} setIsConfirmPassword={setIsConfirmPassword} />
            </div>

        </div>
    )
}

export default Password