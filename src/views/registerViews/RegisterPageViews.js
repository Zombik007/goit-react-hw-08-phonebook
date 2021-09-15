import styles from "./RegistersViews.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

export default function RegisterViews() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);

      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    name.length === 0 || email.length === 0 || password.length === 0
      ? toast.error("Заполните все поля", {
          theme: "colored",
        })
      : dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.title}> Registration</h1>
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={handlerChange}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handlerChange}
          />
          <Form.Text className="text-muted">
            We'll not share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handlerChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registration
        </Button>
      </Form>
    </div>
  );
}
