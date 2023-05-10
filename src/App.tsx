import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./views/Error";
import DashBoard from "./views/DashBoard";
import { Provider } from "react-redux";
import store from "state/store";

/*
Naver map 연동
리스트 필터링 -> 카테고리, 구
리스트 검색
Map 필터링 -> 카테고리, 구
Map 검색
현재위치 distance 계산
*/

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={Error}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
