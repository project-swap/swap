import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import NotFound from './pages/NotFound';
import Pages from './pages/Pages';
import RegisterProduct from './pages/RegisterProduct';
import SignUp from './pages/SignUp';
import Swap from './pages/Swap';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Pages />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/register" element={<RegisterProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
