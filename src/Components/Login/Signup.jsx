

// import React, { useState } from 'react'

// function Signup() {
//     const[name,setName]=useState("")

//     const handleChange=(ab)=>{
//         console.log(ab.target.value)
//         setName(ab.target.value)

//     }
//   return (
//     <div>
//       <input type="name" placeholder='enter your name' id='name' onChange={(e)=>handleChange(e)} />
//       <span>
//         name:{name}
//       </span>
//     </div>
//   )
// }

// export default Signup



import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {useNavigate,Link} from "react-router-dom"



export default function Signup() {
    const [signup,SetSignup]=useState({
        email:" ",password:" ",location:" ",role:" "
    })
    const navigate=useNavigate()
    const handRegister=(e)=>{
        console.log(e);
        // e.preventDefault()
        localStorage.setItem("signupData",JSON.stringify(signup))
        console.log(signup)
        navigate('/login')

        
       
    }
  return (
    <Container fluid className="signup-bg d-flex align-items-center justify-content-center">
      <Row className="w-100 px-3 px-md-0">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="signup-card border-0 p-4 p-sm-5 rounded-4 shadow">
            <div className="text-center mb-4">
              <h2 className="fw-bold mt-2">Create Your Account</h2>
            </div>
            <Form onSubmit={handRegister} >
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required  
                onChange={(r)=>SetSignup({...signup,email:r.target.value})}/>
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required
                 onChange={(r)=>SetSignup({...signup,password:r.target.value})}
                  />
              </Form.Group>

              <Form.Group controlId="location" className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Location" required 
                 onChange={(r)=>SetSignup({...signup,location:r.target.value})}
                   />
              </Form.Group>

              <Form.Group controlId="formRole" className="mb-4">
                <Form.Label>Role</Form.Label>
                <Form.Select   onChange={(r)=>SetSignup({...signup,role:r.target.value})}>
                  <option value="user" >User</option>
                  <option value="admin">Admin</option>
                  
                </Form.Select>
               
               <Link to='/login'> <h4>Already Registred..?</h4>
               </Link>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 py-2 fw-semibold fs-5" >
                Register
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      
      
    </Container>
  );
}
