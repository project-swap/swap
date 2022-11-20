import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from '../components/Loader';
import Login from './Login';
import Mypage from './Mypage';
import NotFound from './NotFound';
import Pages from './Pages';
import SignUp from './SignUp';

const queryClient = new QueryClient();

const Router = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Pages />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default Router;
