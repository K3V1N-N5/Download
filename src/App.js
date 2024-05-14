import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import DownloadFile from './pages/download/downloadFile';
import DownloadLink from './pages/download/downloadLink';
import Ads from './pages/ads';

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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
