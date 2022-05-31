import {useState, useEffect} from 'react'
import './App.css';
import {Form, FormText, FormGroup,Label,Button,Col, Input} from 'reactstrap';

function App() {
  const handleSubmit=(e)=>{
e.preventDefault();

  }
  return (
    <div className="App">
      <div className="container">

       <Form inline onSubmit={handleSubmit}>
    <FormGroup floating>
      <Input
        id="exampleName"
        name="name"
        placeholder="Name"
        type="text"
      />
      <Label for="exampleName">
        Name
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
    <Button>
      Login
    </Button>
  </Form>
    </div>
    <div className="container">
      <p>Dashboard</p>
      <p>Dear Name, welcome to your profile!</p>
      <Button>Logout</Button>
    </div>
    </div>
  );
}

export default App;
