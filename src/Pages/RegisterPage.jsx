import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useFireBase } from '../context/FireBase';
import { useNavigate } from 'react-router-dom';
function RegisterPage() {
  const { signUpUserWithEmailPassword,isLoggedIn } = useFireBase();
  const navigate=useNavigate();
  // console.log(signUpUserWithEmailPassword);

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");


  useEffect(()=>{
    if(isLoggedIn){
      //navigate
    navigate("/")
    }
  },[navigate,isLoggedIn])
//for create account

const handleSubmit = async(e)=>{
e.preventDefault();
console.log("signin user....");

await signUpUserWithEmailPassword(email,pass)
}
  return (
    <div className='container mt-5'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Account
        </Button>
      </Form>
    </div>
  )
}

export default RegisterPage;