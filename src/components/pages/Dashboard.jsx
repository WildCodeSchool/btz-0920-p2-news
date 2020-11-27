import { CustomInput, Form, FormGroup, Label, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '150px',
        paddingBottom: '150px',
      }}
    >
      <h1>Bienvenu {user}</h1>
      <Form>
        <FormGroup>
          <Label for="exampleCheckbox">Sauvegardez vos préférences :</Label>
          <div>
            <CustomInput
              type="switch"
              id="exampleCustomSwitch"
              name="customSwitch"
              label="Sport"
            />
            <CustomInput
              type="switch"
              id="exampleCustomSwitch2"
              name="customSwitch"
              label="Business"
            />
            <CustomInput
              type="switch"
              id="exampleCustomSwitch3"
              label="Science"
            />
            <CustomInput
              type="switch"
              id="exampleCustomSwitch4"
              label="Santé"
            />
            <CustomInput
              type="switch"
              id="exampleCustomSwitch5"
              label="Technologies"
            />
            <CustomInput
              type="switch"
              id="exampleCustomSwitch6"
              label="Divertissement"
            />
          </div>
        </FormGroup>
      </Form>
      <Button
        style={{
          marginBottom: '20px',
        }}
        type="submit"
      >
        Sauvegarder
      </Button>
      <Button
        style={{
          marginBottom: '20px',
        }}
        type="submit"
        onClick={onLogout}
      >
        Logout
      </Button>
    </div>
  );
};
Dashboard.propTypes = {
  user: PropTypes.string.isRequired,
  onLogout: PropTypes.string.isRequired,
};
export default Dashboard;
