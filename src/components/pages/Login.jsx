import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Login({ onSubmit }) {
  const [name, setName] = useState({
    name: '',
    error: '',
  });
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setName({ name: event.target.value, error: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.name) {
      onSubmit(name.name);
    } else {
      setName({ error: 'ERROR' });
    }
  };

  return (
    <div
      style={{
        paddingTop: '150px',
        paddingBottom: '150px',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          width: '50%',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <div>
          <h1 style={{ width: '100%' }}>Mon Espace</h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Nom d&apos;utilisateur</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="E-mail"
              value={name.name}
              onChange={(event) => handleChange(event)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Mot de Passe</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Mot de passe"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormGroup>
          <Button type="submit">Me connecter</Button>
          <p>{name.error}</p>
        </Form>
      </div>
    </div>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.string.isRequired,
};

export default Login;
