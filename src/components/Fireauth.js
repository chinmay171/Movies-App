import React,{useState} from 'react';
import {auth} from '../firebase';

function Fireauth() {
    const {email, setEmail} = useState('');
    const {password, setPassWord} = useState('');
    // const {user, setUser} = useState('');

    let create= async()=> {
        let res = await auth.createUserWithEmailAndPassword(email, password);
        console.log(res);
    }
    return (
        <div className="signPage">
          {/* <img src={'./Netflix-Background.jpg'} alt='netflix' ></img> */}
            <div className='inputArea'>
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className = "emailArea" placeholder='Enter Your Email'/>
              <input type="password" value={password} onChange={(e)=>setPassWord(e.target.value)} className='passwdArea' placeholder='Enter Password'/>
              <button onClick={create} className='createbutton'>Create Account</button>
            </div>
        </div>
    
  )
}

export default Fireauth