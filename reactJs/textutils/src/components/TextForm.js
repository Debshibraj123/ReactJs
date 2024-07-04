import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("UpperClick Was Clicked");

        let newText = text.toUpperCase();

        setText(newText);

        props.showAlert("Converted To Uppercase", "primary");
    }

    const handleDownClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase" , "primary");
    }

    //event is important for textarea input etc
    const handleOnChange = (event) => {
        // console.log("Onchange WAs clicked");
        setText(event.target.value);
    }

    const removeText = () => {
        setText(" ");
        props.showAlert("Text Removed" , "primary")
    }

    const handleCopy = ()=>
    {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard" , "primary")
    }
    const handleExtraSpaces = ()=>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');

    // setText("New Text") write way to change text

    return (
        <>
            <div className='container' style={{
                        color: props.mode==='dark'?'white':'#042743'
                    }}  >
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}  style={{
                        backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'
                    }}></textarea>
                </div>
                <div className="row">
                    <div className="col-md-3 my-3"> <button className='btn btn-primary' onClick={handleUpClick} >Convert To Uppercase</button></div>
                    <div className="col-md-3 my-3"> <button className='btn btn-primary' onClick={handleDownClick} >Convert To Lowercase</button></div>
                    <div className="col-md-2 my-3"> <button className='btn btn-primary' onClick={removeText} >Remove Text</button></div>

                    <div className="col-md-2 my-3"> <button className='btn btn-primary' onClick={handleCopy} >Copy Text</button></div>

                    <div className="col-md-2 my-3"> <button className='btn btn-primary' onClick={handleExtraSpaces} >Remove Extra Spaces</button></div>
                </div>

            </div>

            <div className="conatiner my-3" style={{
                        color: props.mode==='dark'?'white':'#042743'
                    }} >
                <h1>Your Texty Summary</h1>
                <p>{text.split(" ").length} words, {text.length}characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in  the textbox to preview it here"}</p>
            </div>
            
        </>
    )
}

