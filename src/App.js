import {useState, useEffect} from 'react'
import './App.css';
import {Form, FormText, FormGroup,Label,Button,Col, Input} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <div className="container">

       <Form inline>
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
    {' '}
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
      Submit
    </Button>
  </Form>
    </div>
    </div>
  );
}

export default App;
