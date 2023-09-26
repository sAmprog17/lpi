import React, { createContext, useContext, useState } from 'react';

// Create a context for managing user authentication state
const AuthContext = createContext();

// Custom hook to access the authentication context
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component to wrap your application and provide authentication state
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Function to handle user login (replace with actual logic)
  function login(userData) {
    // You should implement logic to validate user credentials and set the user data here
    setUser(userData);
  }

  // Function to handle user logout (replace with actual logic)
  function logout() {
    // Implement logic to clear user data when logging out
    setUser(null);
  }

  // Value provided to the context
  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
