import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import DownloadFile from './pages/download/downloadFile';
import DownloadLink from './pages/download/downloadLink';
import Ads from './pages/ads';
import Blank from './pages/blank';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            key={"/"}
            path={"/"}
            element={<Home />}
          />
          {DownloadLink.map((prop) => (
            <Route
              key={prop.id}
              path={prop.id}
              element={<DownloadFile props={prop} />}
            />
          ))}
          <Route
            key={"/ads"}
            path={"/ads"}
            element={<Ads />}
          />
          <Route
            key={"*"}
            path={"*"}
            element={<Blank />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
