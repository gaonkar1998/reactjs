import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ColorSchemesExample from "../navbarComponent/navbar"

export function Register(p) {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    
    const showData = () => {
        const data = {email, password}
        axios.post('http://localhost:5000/api/user/register', data)
          .then( (response)=> {
            localStorage.setItem("token", response.data.data)
            navigate("/play")
          })
          .catch( (error) => {
            console.log(error);
          });
        setEmail("")
        setPassword("")
    }
    return (
        <div>
            <div className='login'>
            <ColorSchemesExample/>
                <h2>SIGN IN {p.text}</h2>
                <input placeholder="Enter your email" value={email} onChange={(data) => setEmail(data.target.value)} /><br></br>
                <input placeholder="Enter your password" value={password} onChange={(data) => setPassword(data.target.value)} /><br></br>
                <input placeholder="Enter your password" value={password} onChange={(data) => setPassword(data.target.value)} /><br></br>
                <input placeholder="Enter your password" value={password} onChange={(data) => setPassword(data.target.value)} /><br></br>
                <input placeholder="Enter your password" value={password} onChange={(data) => setPassword(data.target.value)} /><br></br>
                <button onClick={showData}>Submit</button>
                <Button variant="primary">Primary Button</Button>
            </div>
        </div>
    )
}

export default Register;