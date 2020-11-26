import PropTypes from 'prop-types';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome {user}</h1>
    </div>
  );
};
Dashboard.propTypes = {
  user: PropTypes.string.isRequired,
};
export default Dashboard;
