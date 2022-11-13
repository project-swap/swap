import React, { Suspense } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Loader from './components/Loader';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
// import RegisterProduct from './pages/RegisterProduct';
import Swap from './pages/Swap';

const GlobalStyles = createGlobalStyle`
    ${reset}
`;

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/swap" element={<Swap />} />
              {/* <Route path="/register" element={<RegisterProduct />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
