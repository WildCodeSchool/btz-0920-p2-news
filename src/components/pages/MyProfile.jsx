import { useState } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

function MyProfile() {
  const [user, setUser] = useState('');

  const handleLogout = () => {
    setUser('');
  };

  return (
    <div>
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <Login onSubmit={setUser} />
      )}
    </div>
  );
}

export default MyProfile;
