import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import TodoListPage from './Components/TodoListPage';

function App() {
  const [user, setUser] = useState(null);

  const authContextValue = {
    user,
    login: (userData) => {
      // Implement login logic here (check credentials, set user, etc.)
      setUser(userData);
    },
    logout: () => {
      // Implement logout logic here (clear user data, etc.)
      setUser(null);
    },
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/todo" component={TodoListPage} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
