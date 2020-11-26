import { useState } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

function MyProfile() {
  const [user, setUser] = useState('');

  return (
    <div>{user ? <Dashboard user={user} /> : <Login onSubmit={setUser} />}</div>
  );
}

export default MyProfile;
