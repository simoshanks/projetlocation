import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login({setUser}) {
    const navigate = useNavigate();      
    const [message, setMessage] = useState("");
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    function handleLogin(e){
        e.preventDefault()
        axios.post('http://localhost:3000/auth/login',{
            email,password
        }).then(res=>{
            setUser(res.data)
            if(res.data.role==='admin'){
                navigate('/admin')
            }else{
                navigate('/user')
            }
        }).catch(err=>{
          console.log(err);
          
            setMessage('verify your info ')
        })

    }
    return (<div>
        <form onSubmit={handleLogin}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <button type="submit" className="btn btn-primary">login</button>
        </form>
        {message && <div>{message}</div>}

    </div>)
}
export default Login;