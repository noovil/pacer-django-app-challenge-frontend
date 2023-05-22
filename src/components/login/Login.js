import React, { useState } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";
import LoginService from "../../services/LoginService";
import IncreaseScoreService from "../../services/IncreaseScoreService";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [userId, setUserId] = useState("");
    const [score, setScore] = useState(0);
    const onChange = e => {
        if (e.target.name === "username"){
            setUsername(e.target.value)
        }
        else if (e.target.name === "password"){
            setPassword(e.target.value);
        }
    };

    const onLoginClick = () => {
        console.log("Login " + username + " " + password);
        LoginService(username, password).then((res) => {
          if (res.status === 200) {
            res.json().then((json) => {
              console.log(json);
              setSuccess(true);
              setUserId(json.userId);
              setScore(json.score);
            })
          }
          else {
            setMessage("Incorrect credentials.")
          }
        })
    };

    const onButtonClick = () => {
      setScore(score+1);
      IncreaseScoreService(username, {score: score}).then((res)=>{
        if (res.status === 200) {
          res.json().then((json) => {
            console.log(json);
          })
        }
        else {
          
        }
      })
    }
  
    return (
      <Container>
        {success ? 
        <>
          <div>userId: {userId}</div>
          <div>score: {score}</div>
          <Button color="primary" onClick={onButtonClick}>Increase score</Button>
        </>:
          <Row>
            <Col md="4">
              <h1>Login</h1>
              <Form>
                <Form.Group controlId="usernameId">
                  <Form.Label>User name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={onChange}
                  />
                  <FormControl.Feedback type="invalid"></FormControl.Feedback>
                </Form.Group>

                <Form.Group controlId="passwordId">
                  <Form.Label>Your password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={onChange}
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Form>
              <Button color="primary" onClick={onLoginClick}>Login</Button>
              <div>{message}</div>
            </Col>
          </Row>
        }
      </Container>
    );
}

export default Login;