import React,{useState} from 'react';

export default function BMI() {
  const [weight,setweight]=useState(0);
  const [height,setheight]=useState(0);
  const [bmi,setbmi]=useState('');
  const [message,setmessage]=useState('');
  // let imgsrc;
  let calculatebmi=(event) => {
    event.preventDefault();
    if(weight== 0 || height == 0){
      alert('Invalid input');
    }
    else{
      let bmi=(weight/(height/100)**2)
      setbmi(bmi.toFixed(2))

      if(bmi<18.5) {
        setmessage('You are Underweight');
      }else if(bmi>=18.5 && bmi<=24.9) {
        setmessage('You are Normal');
      }else if(bmi>=25 && bmi<=29.9){
        setmessage('You are Overweight')
      }else{
        setmessage('You are Obese')
      }
    }
  }
  let imgsrc;
  if(bmi<1){
    imgsrc= null;
  }
  else if(bmi<18.5){
    imgsrc=require('src\images\skinny.jpg');
  }
  else if(bmi>=18.5 && bmi<=24.5){
    imgsrc=require('src\images\healthy.jpg');
  }
  else if(bmi>=25 && bmi<=29.9){
    imgsrc=require('src\images\overweight.png');
  }
  else{
    imgsrc=require('src\images\obese.jpg');
  }
  return (
    <div className='bmi'>
      <div className="container">
        <h2 className="center">BMI calculator</h2>
        <form onSubmit={calculatebmi}>
          <div>
          <label>Weight in (Kg)</label>
          <input value={weight} onChange={(e) => setweight(e.target.value)} />
          </div>
          <div>
          <label>Height in (Cm)</label>
          <input value={height} onChange={(e) => setheight(e.target.value)} />
          </div>
          <button className='button' type='submit'>Submit</button>
        <button className="reload">Reload</button>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={imgsrc} alt=""></img> 
        </div>
      </div>
    </div>
  )
}

