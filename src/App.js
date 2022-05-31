import { useState, useEffect } from "react";
import "./App.css";
import {
  Form,
  FormText,
  FormGroup,
  Label,
  Button,
  Col,
  Input,
} from "reactstrap";

function App() {
  const [name, setName] = useState('Alex')
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("t@t.com");
  const [password, setPassword] = useState("123");
  const [fieldsEmpty, setFieldsEmpty] =useState(false)

  useEffect(() => {
    let token = sessionStorage.getItem("token", "new token");

    if (token) {
      console.log("session contains token");
    }
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = e.target.name.value;
    const emailValue = e.target.email.value;
    const pwdValue = e.target.password.value;
    console.log(nameValue, emailValue, pwdValue);

    if(nameValue!=='' && emailValue!=='' && pwdValue!==''){
      console.log('auth')
    } else {
setFieldsEmpty(true)
setTimeout(()=>{
  setFieldsEmpty(false)
},2000)
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setToken(null);
  };

  sessionStorage.setItem("token", "asdfdsff");
  setTimeout(() => {
    sessionStorage.clear();
  }, 2000);

  return (
    <div className="App">
      {
        fieldsEmpty ? <div className="error">Please fill the fields first!</div> : null
      }
      {token ? (
        <div className="container">
          <p>Dashboard</p>
          <p>Dear Name, welcome to your profile!</p>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <div className="container">
          <Form inline onSubmit={handleSubmit}>
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
        </div>
      )}
    </div>
  );
}

export default App;
