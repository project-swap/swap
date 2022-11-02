import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import NavBar from './components/common/navBar';

const GlobalStyles = createGlobalStyle`
    ${reset}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <NavBar />
    </div>
  );
}

export default App;
