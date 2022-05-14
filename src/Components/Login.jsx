import React, { useState} from 'react'
import img1 from './../assets/img/leftcolumn.png'

const Login = ({setLogin}, e) => {

   const[name, setName] = useState("")
   const[email, setEmail] = useState("")
   const[password, setPassword] = useState("")
   const[cp, setCP] = useState("")
   const[ph, setPH] = useState("")
   const[terms, setTerms] = useState(null)
   const[emailErr, setEmailErr] = useState("")
   const[phErr, setPHErr] = useState("")
   const[pErr, setPErr] = useState("")
   const[cpErr, setCPErr] = useState("")
  

   
   
    const handleSubmit = (e) =>{
        e.preventDefault()
        
       setEmailErr(false)
       setPHErr(false)
       setPErr(false)
       setCPErr(false)
        if(email ===""){
            setEmailErr("enter your email");
        }
        else if(!email?.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            setEmailErr("enter valid email");

        }
        else if(password === ""){
            setPErr("enter your password");
        }
        else if(password !== cp){
            setCPErr("password does not match");
        }
        else if(!ph?.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/)){
            setPHErr("provide valid mobile number e.g +(234)-816-6398746");
        }
        else{
            setLogin(true)
            setName("")
            setEmail("")
            setPassword("")
            setCP("")
            setPH("")
            setTerms("")
        }

     
       
    }

 

  return (
   <div className="login">
      <div className="login__inner">
      <div className="login__right">
       <div className="login__content">
           <h6 className='login__heading'>Choose A Date Range</h6>
           <p className='login__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, enim!</p>
       </div>
      </div>
      <div className="login__left">
        <h4 className="login-heading">Create An Account</h4>
        <div className="login__form">
            <div className="login__email">
                <label className='login__label' htmlFor="email">Your email address</label>
                <input onChange={(e) => setEmail(e.target.value)} name='email' type="email" className="login__input" id='email' required/>
                {emailErr &&  <small className="login__err">{emailErr}</small>}
            </div>
            <div className="login__password">
                <label className='login__label' htmlFor="password">Your password</label>
                <input onChange={(e) => setPassword(e.target.value)}  name='password' type="password" className="login__input" id='password' required/>
               {pErr && <small className='login__err'>{pErr}</small>}
            </div>
            <div className="login__cp">
                <label className='login__label' htmlFor="cp">Confirm Your Password</label>
                <input onChange={(e) => setCP(e.target.value)}  name='cp' id='cp' type="password" className="login__input" required/>
                {cpErr &&  <small className="login__err">{cpErr}</small>}
            </div>
            <div className="login__fullname">
                <label className='login__label' htmlFor="fullname">Your fullname</label>
                <input onChange={(e) => setName(e.target.value)}  name='fullname' id='fullname' type="text" className="login__input" required/>
            </div>
            <div className="login__ph">
                <label className='login__label' htmlFor="ph">Your phone number</label>
                <input onChange={(e) => setPH(e.target.value)}  name='ph' id='ph' type="text" className="login__input" required/>
                {phErr &&  <small className="login__err">{phErr}</small>}
            </div>
            <div className="login__terms">
                <input onChange={(e) => setTerms(e.target.checked)}  id='terms' type="checkbox" className="login__input--terms" required/>
                <label className='login__label--terms' htmlFor="terms">I read and agree terms and conditions</label>
            </div>
            <div className="login__btn">
                <button onClick={handleSubmit} id='terms' type="submit" className="login__btn--submit">Create account</button>
       
            </div>
        </div>
      </div>
      </div>
   </div>
  )
}

export default Login