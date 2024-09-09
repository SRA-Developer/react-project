import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked:  " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked:  " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleTitleClick = ()=>{
        function toTitleCase(str) {
            return str.split(' ').map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join(' ');
        }
    
    let newText = toTitleCase(text);
    setText(newText)
    //console.log(newText);  // Output: "This Is A Sample Text"
}

    const handleRemoveSpaceClick = ()=>{
        // console.log("Uppercase was clicked:  " + text);
        let newText = text.replace(/\s+/g, '');
        setText(newText)
    }

    const handleSingleSpaceClick = ()=>{
    let newText = text.replace(/\s+/g, ' ');
    setText(newText)
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //text = "New Text"; //Wrong way to change the state
   // setText("New Text"); //Correct way to change the state

  return (
    <>
    <div className= "container">
        <h1>{props.headding}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleTitleClick}>Convert to Titlecase</button>
<button className="btn btn-primary mx-1" onClick={handleRemoveSpaceClick}>Remove Space</button>
<button className="btn btn-primary mx-1" onClick={handleSingleSpaceClick}>Remove Extra Space</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} chaqracters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
