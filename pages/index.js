// Link - Next
import Image from 'next/image'

// UseState - React
import { useState } from 'react';
import { useRouter } from 'next/router';

// useAuth - Firebase
import { useAuth } from '../context/AuthUserContext';

// CSS
import Style from '../styles/Login.module.css';

// Components UI - Reactstrap
import { Row, Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = event => {
    setError(null)
    signInWithEmailAndPassword(email, password)
    .then(authUser => {
      router.push('/logged_in');
    })
    .catch(error => {
      setError(error.message)
    });
    event.preventDefault();
  };

  return (
    <section className={Style.container}>
      <Row className={Style.cardMain}>
        <Col md={6}>
          <Image
            src="/image.png"
            layout="fill"
          />
        </Col>
        <Col md={6}>
        <h1>Entrar</h1>
        <Form onSubmit={onSubmit}>
          { error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
              <Label for="loginEmail" sm={4}>Email</Label>
              <Col sm={8}>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="loginEmail"
                  placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="loginPassword" sm={4}>Password</Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="loginPassword"
                  placeholder="Senha" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button>Login</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </section>
  )
}
