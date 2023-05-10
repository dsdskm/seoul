import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./views/Error";
import DashBoard from "./views/DashBoard";
import { Provider } from "react-redux";
import store from "state/store";
import { NavermapsProvider } from "react-naver-maps";
import Temp from "views/Temp";

/*
show true/false 추가
Naver map 연동
리스트 필터링 -> 카테고리, 구
리스트 검색
Map 필터링 -> 카테고리, 구
Map 검색
현재위치 distance 계산
*/
const clientId = process.env.REACT_APP_NAVER_CLIENT_ID ? process.env.REACT_APP_NAVER_CLIENT_ID : "";
function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={Error}>
        <NavermapsProvider ncpClientId={clientId}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/temp" element={<Temp />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </NavermapsProvider>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
