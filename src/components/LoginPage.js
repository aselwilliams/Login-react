import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Button,
    Input,
  } from "reactstrap";

 const LoginPage = ({handleFormSubmit}) => {
  return (
    <Form inline onSubmit={handleFormSubmit}>
    <FormGroup floating>
      <Input
        id="exampleName"
        name="name"
        placeholder="Name"
        type="text"
      />
      <Label for="exampleName">Name</Label>
    </FormGroup>{" "}
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
      <Label for="exampleEmail">Email</Label>
    </FormGroup>
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Label for="examplePassword">Password</Label>
    </FormGroup>{" "}
    <Button>Login</Button>
  </Form>
  )
}
export default LoginPage