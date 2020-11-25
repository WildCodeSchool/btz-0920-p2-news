import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function MyProfile() {
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
        <Form>
          <FormGroup>
            <Label for="exampleEmail">E-mail</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="E-mail"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Mot de Passe</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Mot de passe"
            />
          </FormGroup>
          <Button>Me connecter</Button>
        </Form>
      </div>
    </div>
  );
}
export default MyProfile;
