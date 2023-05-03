import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './views/Error';
import DashBoard from './views/DashBoard';

/*
address to latitude,longitude
firebase data 추가
Naver map 연동
리스팅
현재위치 distance 계산
*/

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
