import React from 'react';

import SingIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SingIn />
    {/* <SignUp /> */}

    <GlobalStyle />
  </>
);

export default App;
