import React from 'react';

import SingIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'daniel' }}>
      <SingIn />
      {/* <SignUp /> */}
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
