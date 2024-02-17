import React, { useState } from "react";


const ConfirmPassword= ({finalPassword, setIsConfirmPassword})=>{

    // console.log(finalPassword);
    const [confirmPassword, setConfirmPassword] = useState("");
    let isPaswordMatched= false;


    //      Validating if confirm password is good to go for submiting

    function confirmPasswordBlurred(e){
        // console.log("confirm password blur is working");
        if(e.key==="Enter"){
            if(isPaswordMatched){
                setIsConfirmPassword(true);
            }
            else{
                setIsConfirmPassword(false);
            }
        }
        else{
            if(isPaswordMatched){
                setIsConfirmPassword(true);
            }
            else{
                setIsConfirmPassword(false);
            }
        }
    }

    // //////////////////////////////////////////////////////////////////////////

    function onConfirmPasswordInput(e){
        setConfirmPassword((e.target.value).trim());
    }

    if(confirmPassword === finalPassword){
        isPaswordMatched=true;
    }else{
        isPaswordMatched=false;
    }


    return(
        <div className="input-container">
            <h3>Confirm Password:</h3>
            <input 
                type="password"
                placeholder="Re-enter your password"
                onChange={onConfirmPasswordInput}
                onBlur={confirmPasswordBlurred}
                onKeyUp={confirmPasswordBlurred}
                style={isPaswordMatched? {border: "3px solid green"}: {border: "3px solid red"}}
            />

            <p>{(isPaswordMatched && finalPassword) ? "" : "Password do not match"}</p>
        </div>
    )
}

export default ConfirmPassword