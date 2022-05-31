import { useState, useEffect } from "react";
import "./App.css";
import {v4 as uuidv4} from 'uuid';
import Dashboard from './components/Dashboard'
import {
  Form,
  FormGroup,
  Label,
  Button,
  Input,
} from "reactstrap";

function App() {
  const [name, setName] = useState('')
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("t@t.com");
  const [password, setPassword] = useState("123");
  const [fieldsEmpty, setFieldsEmpty] =useState(false);
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    let name= sessionStorage.getItem('name')
    if (token) {
     setToken(token)
     setName(name)
    }
  },[]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nameValue = e.target.name.value;
    const emailValue = e.target.email.value;
    const pwdValue = e.target.password.value;
    console.log(nameValue, emailValue, pwdValue);

    if(nameValue!=='' && emailValue!=='' && pwdValue!==''){
      if(emailValue===email && pwdValue===password){
// const token=emailValue+pwdValue //t@t.com123
const token= uuidv4();
sessionStorage.setItem('token',token)
sessionStorage.setItem('name',name)
setToken(token);
setName(nameValue)
      } else {
setNotFound(true)
setTimeout(()=>{
  setNotFound(false)
},2000)
      }
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

  return (
    <div className="App">
      {token ? (
      <Dashboard name={name} handleLogout={handleLogout} />
      ) : (
        <div className="container">
          {
            fieldsEmpty ? <div className="error">Please fill the fields first!</div> : null
          }
            {
            notFound ? <div className="error">User is not found in the system!</div> : null
          }
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
        </div>
      )}
    </div>
  );
}

export default App;
