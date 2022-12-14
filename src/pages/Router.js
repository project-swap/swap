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
import Swap from './Swap';
import Mypage from './Mypage';
import Loader from './Loader';
import UserChatting from './UserChatting';
import LocationSetting from './LocationSetting';
import BookMarkPage from './BookMarkPage';
import SwapList from './SwapList';
import ReportHistory from './ReportHistory';
import Profile from './Profile';
import Test from './Test';

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
                <Route path="/product-list" element={<Swap />} />
                <Route path="/register" element={<Register />} />
                <Route path="/chat-user:id" element={<UserChatting />} />
                <Route path="/locationsetting" element={<LocationSetting />} />
                <Route path="/bookmark" element={<BookMarkPage />} />
                <Route path="/swaplist" element={<SwapList />} />
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
