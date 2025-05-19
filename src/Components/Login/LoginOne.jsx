
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {useNavigate} from "react-router-dom"



export default function LoginOne() {
    const [login,SetLogin]=useState({
        email:" ",password:" "
    })
    const [localData,setLocalData]=useState({
        
    })
    const navigate=useNavigate()
    const handLogin=(e)=>{
        e.preventDefault()
        console.log(login,"loginn");
        console.log(localData,"locaall");
        
        
        if(localData.email===login.email && localData.password===login.password)
        {
            alert("Login Sucessfull")
             navigate('/dash')  

        }
        else {
            alert("Invalid Credentials")
        }
        
        

        
       
    }
    useEffect(()=>{
      const signData=JSON.parse( localStorage.getItem("signupData"))
      setLocalData(signData)
    },[])
  return (
    <Container fluid className="signup-bg d-flex align-items-center justify-content-center">
      <Row className="w-100 px-3 px-md-0">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="signup-card border-0 p-4 p-sm-5 rounded-4 shadow">
            <div className="text-center mb-4">
              <h2 className="fw-bold mt-2">Login</h2>
            </div>
            <Form onSubmit={handLogin} >
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required  
                onChange={(r)=>SetLogin({...login,email:r.target.value})}/>
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required
                 onChange={(r)=>SetLogin({...login,password:r.target.value})}
                  />
                 
                 <Link to='/signup'>
                  <h2>Not Yet Registered ..?</h2>
                  </Link>
              </Form.Group>

             

              

              <Button variant="primary" type="submit" className="w-100 py-2 fw-semibold fs-5"  >
                Login
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      
      
    </Container>
  );
}
