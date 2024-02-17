import React,{useState} from "react";


const Email =({setIsEmail})=>{

    const[myEmail, setMyEmail] = useState("");
    let isValidEmail= false;


    //          Validating if Email is good to go for submiting
    function emailBlurred(e){
        // console.log("email blur is working");
        if(e.key==="Enter"){
            if(isValidEmail){
                setIsEmail(true);
            }
            else{
                setIsEmail(false);
            }
        }
        else{
            if(isValidEmail){
                setIsEmail(true);
            }
            else{
                setIsEmail(false);
            }
        }
    }

    //////////////////////////////////////////////////////////////////////
    


    function onEmailInput(e){
        setMyEmail((e.target.value).trim())
    }

    if(myEmail.includes("@") && myEmail.includes(".")){
        isValidEmail=true;
        
        
    }
    else{
        isValidEmail= false;
    }
    

    return(
        <div className="input-container">
            <h3>Email:</h3>
            <input 
                type="text"  
                placeholder="Enter your email"
                value={myEmail}
                onChange={onEmailInput}
                onBlur={emailBlurred}
                onKeyUp={emailBlurred}
                style={isValidEmail? {border: "3px solid green"}: {border: "3px solid red"}}
            />

            <p>
                {isValidEmail? "": "Invalid email format"}
            </p>

        </div>
    )
}

export default Email