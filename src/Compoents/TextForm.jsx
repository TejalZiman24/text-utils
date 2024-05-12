import React, { useState } from "react"

function TextForm(props) {
    const handleUpbutton = () => {

        let newtext = text.toUpperCase()
        setText(newtext)
        props.showalertMsg('converted to uppercase','success')
        
    }
    const handleLowerButton=()=>{
       let newtext=text.toLowerCase()
        setText(newtext)
        props.showalertMsg('converted to lowercase','success')
    }
   const handleclearButton=()=>{
   let newtext="";
    setText(newtext)
   }
   const handleRemoveSpace=()=>{
   let newtext=text.trim()
   setText(newtext)
    

   }

    const handleOnChange = (event) => {

        setText(event.target.value)
    }
    

    let [text, setText] = useState("Enter Text Here")

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3" >

                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpbutton}>Convert To UpperCase </button>
            <button className="btn btn-primary mx-2" onClick={handleLowerButton}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearButton}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveSpace} >Remove Extra Space</button>

            <div>
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words and{text.length}characters</p>
                <h3>Preview</h3>{text}
            </div>
        </div>
        

    )
}
export default TextForm