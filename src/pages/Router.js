import React, { Suspense } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// import router
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';
import Search from '../pages/Search';
import Register from '../pages/Register';
import Swap from '../pages/Swap';
import Mypage from '../pages/Mypage';
import Loader from '../pages/Loader';

const GlobalStyles = createGlobalStyle`
    ${reset}
`;

const queryClient = new QueryClient();

const Router = () => {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<Search />} />
                <Route path="/swap" element={<Swap />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </RecoilRoot>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default Router;
