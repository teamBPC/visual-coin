import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import CoinExchange from "./pages/coin_exchange/CoinExchange";
import CoinMap from "./pages/coin_map/CoinMap";
import CoinData from "./pages/coin_detail/CoinData";
import DataDetail from "./pages/coin_detail/DataDetail";
import CoinComparison from "./pages/coin_comparison/CoinComparison";
import Member from "./pages/member/Member";
import Login from "./pages/member/Login";
import Join from "./pages/member/Join";
import Mypage from "./pages/mypage/MyPage";
import MypageInvest from "./pages/mypage/MypageInvest";
import MypageSetting from "./pages/mypage/MypageSetting";
import MypageSubscribe from "./pages/mypage/MypageSubscribe";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<CoinExchange />} />
          <Route path="/coin-map" element={<CoinMap />} />
          <Route path="/coin-detail" element={<CoinData />} />
          <Route path="/:coinId" element={<DataDetail />} />
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
    </BrowserRouter>
  );
}
export default Router;
