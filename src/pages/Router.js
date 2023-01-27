import React, { lazy, Suspense } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// import router
const Main = lazy(() => {
  return Promise.all([
    import('./Main'),
    new Promise(resolve => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});
import Login from './Login';
import NotFound from './NotFound';
import SignUp from './SignUp';
import Search from './Search';
import Register from './Register';
import Loader from './Loader';
import UserChatting from './UserChatting';
import LocationSetting from './mypage/LocationSetting';
import ReportHistory from './mypage/ReportHistory';
import BookMarkPage from './mypage/BookMarkPage';
import Profile from './mypage/Profile';
import Test from './Test';
import SalesProduct from './SalesProduct';
import DetailPage from './DetailPage';
import Follow from './Follow';
import ExchangeHistory from './mypage/ExchangeHistory';
import Mypage from './mypage/Mypage';

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
                <Route path="/product-list" element={<SalesProduct />} />
                <Route path="/register" element={<Register />} />
                <Route path="/chat-user:id" element={<UserChatting />} />
                <Route path="/detail" element={<DetailPage />} />
                <Route path="/follow" element={<Follow />} />
                <Route path="/locationsetting" element={<LocationSetting />} />
                <Route path="/bookmark" element={<BookMarkPage />} />
                <Route path="/swaplist" element={<ExchangeHistory />} />
                <Route path="/report" element={<ReportHistory />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/test" element={<Test />} />
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
