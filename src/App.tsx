import { Route, Routes } from "react-router-dom";
import CoinExchange from "./pages/coin_exchange/CoinExchange";
import styled from "styled-components";
import CoinData from "./pages/coin_detail/CoinData";
import CoinMap from "./pages/coin_map/CoinMap";
import CoinComparison from "./pages/coin_comparison/CoinComparison";
import DataDetail from "./pages/coin_detail/DataDetail";
import Header from "./components/Header";

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
  padding: 0 3vw;
`;
const AppInner = styled.div`
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <AppInner>
        <Header />
        <Routes>
          <Route path="/coin-exchange" element={<CoinExchange />}></Route>
          <Route path="/coin-map" element={<CoinMap />}></Route>
          <Route path="/coin-detail" element={<CoinData />}></Route>{" "}
          <Route path="/:coinId" element={<DataDetail />}></Route>
          <Route path="/coin-comparison" element={<CoinComparison />}></Route>
        </Routes>
      </AppInner>
    </AppContainer>
  );
}

export default App;
