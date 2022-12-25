import React, { useState } from 'react'


export default function Textform(props) {
  const isEven = (n) => {
    return n % 2 === 0;
  }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  
  const handlebtClick = (work) => {
    if (work === "upperCase") {
      let newtext = text.toUpperCase();
      setText(newtext)
    }
    else if (work === "lowerCase") {
      let newtext = text.toLowerCase();
      setText(newtext)
    }
    else if (work === "clear") {
      setText('')
    }
    else if (work === "inverse") {
      let totalWords = text.split(' ');
      var textinverse = '';
      for (let i = 0; i < totalWords.length; i++) {
        var chars = totalWords[i].split('');
        if (i >= 1) {
          textinverse = textinverse + " "
        }
        for (let f = 0; f < chars.length; f++) {
          if (isEven(f) === true) {
            let cap = chars[f].toUpperCase();
            textinverse = textinverse + cap
          }
          else {
            let cap = chars[f].toLowerCase();
            textinverse = textinverse + cap
          }
        }
      }
      setText(textinverse)
    }
    else if (work === "capital") {
      let totalWords = text.split(' ');
      var textcapital = "";
      for (let i = 0; i < totalWords.length; i++) {
        var capwala = capitalizeFirstLetter(totalWords[i]);
        textcapital = textcapital + capwala + " "
      }
      setText(textcapital)
    }

  }
  const handleOnChange = (event) => {
    if (stpause === "1") {
      var d = new Date();
      let seconder = d.getTime() / 1000;
      let totaltime = (seconder - seconds) / 60
      let totalWords = text.split(' ').length - 1;
      let wpm = totalWords / totaltime
      wpm = parseInt(wpm);
      setwpm(wpm)
      setText(event.target.value)
    }
    else {
      setText('')
    }
  }

  const startpause = (event) => {
    if (stpause === "0") {
      setText('')
      var d = new Date();
      let seconder = d.getTime() / 1000;
      setsec(seconder)
      setstart('1');
      setstartw('| | Pause Now')
    }
    else {
      setstart('0');
      setstartw('Start Now')
    }
  }
  const [text, setText] = useState('');
  const [wpm, setwpm] = useState('0');
  const [stpause, setstart] = useState('0');
  const [stpauseword, setstartw] = useState('Start Now');
  const [seconds, setsec] = useState('');

  return (
    <>
      <div className="container" style={{color: props.mode === "light"?"black":"white"}}>
        <h1 >Enter the text to analyze below</h1>
        <div className="mb-4">
          <textarea
           style={{backgroundColor: props.mode === "light"?"white":"#212529",color: props.mode === "light"?"black":"white"}}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={8}
            onChange={handleOnChange}
            value={text}
          />
        </div>
        <div className="containerlo">
          <div className="btns">
            <button className='btn btn-primary' onClick={() => handlebtClick('upperCase')}>Uppercase</button>
            <button className='btn btn-danger mx-2 my-1' onClick={() => handlebtClick('lowerCase')}>Lowercase</button>
            <button className='btn btn-success mx-2 my-1' onClick={() => handlebtClick('inverse')}>Inverse</button>
            <button className='btn btn-warning mx-2 my-1' onClick={() => handlebtClick('capital')}>Capitalize</button>
            <button className='btn btn-info mx-2 my-1' onClick={startpause}>{stpauseword}</button>
          </div>
          <div className="wpm">
            <h1>{wpm} Wpm</h1>
          </div>
        </div>
      </div>
      <div className="container my-3" style={{color: props.mode === "light"?"black":"white"}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} Words, {text.length} Characters</p>
        <h2 className='my-3'>Preview</h2>
        <p>{text.length>0?text:'Enter The Text To Preview it'}</p>
      </div>
    </>


  )
}
