import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked:  " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "sucess");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked:  " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "sucess");
    }

    const handleTitleClick = ()=>{
        function toTitleCase(str) {
            return str.split(' ').map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join(' ');
        }
    
    let newText = toTitleCase(text);
    setText(newText)
    props.showAlert("Converted to titlecase", "sucess");
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

    const handleCopy = () => {
        //console.log("I am Copy")
        var text = document.getElementById("myBox");
        text.select();
        //text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
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
        <div className= "container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTitleClick}>Convert to Titlecase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaceClick}>Remove Space</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSingleSpaceClick}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} chaqracters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview it here"}</p>
        </div>
    </>
  )
}
