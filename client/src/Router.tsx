import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Login from "./pages/member/Login";
import Join from "./pages/member/Join";
import MypageInvest from "./pages/mypage/MypageInvest";
import MypageSetting from "./pages/mypage/MypageSetting";
import MypageSubscribe from "./pages/mypage/MypageSubscribe";
const Header = lazy(() => import("./components/header/Header"));
const CoinExchange = lazy(() => import("./pages/coin_exchange/CoinExchange"));
const CoinMap = lazy(() => import("./pages/coin_map/CoinMap"));
const MapDetail = lazy(() => import("./pages/coin_map/MapDetail"));
const CoinData = lazy(() => import("./pages/coin_detail/CoinData"));
const DataDetail = lazy(() => import("./pages/coin_detail/DataDetail"));
const CoinComparison = lazy(() =>
  import("./pages/coin_comparison/CoinComparison")
);
const Member = lazy(() => import("./pages/member/Member"));
const Mypage = lazy(() => import("./pages/mypage/MyPage"));

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<CoinExchange />} />
            <Route path="/coin-map" element={<CoinMap />} />
            <Route path="/coin-map/:exchangeId" element={<MapDetail />} />
            <Route path="/coin-detail" element={<CoinData />} />
            <Route path="/coin-detail/:coinId" element={<DataDetail />} />
            <Route path="/coin-comparison" element={<CoinComparison />} />
            <Route path="/my-page" element={<Mypage />}>
              <Route path="my-invest" element={<MypageInvest />} />
              <Route path="my-setting" element={<MypageSetting />} />
              <Route path="my-subscribe" element={<MypageSubscribe />} />
            </Route>
          </Route>
          <Route path="/member" element={<Member />}>
            <Route path="login" element={<Login />}></Route>
            <Route path="join" element={<Join />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
