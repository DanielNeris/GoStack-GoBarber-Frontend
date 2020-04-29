import React from 'react';

import SingIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SingIn />
      {/* <SignUp /> */}
    </AuthProvider>

    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
