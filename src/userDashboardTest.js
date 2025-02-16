//userDashboardTest.js
import React from 'react';
import UserDashboard from './userDashboard';

const UserDashboardTest = () => {
  // Mock user data for testing
  const mockUser = {
    username: "Thapelo",
    email: "test@campus.edu"
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div>
      <UserDashboard 
        user={mockUser} 
        onLogout={handleLogout}
      />
    </div>
  );
};

export default UserDashboardTest;