import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import reset from 'styled-reset';
import Main from './pages/Main.js';

const GlobalStyles = createGlobalStyle`
    ${reset}
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
