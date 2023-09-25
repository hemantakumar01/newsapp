import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React from "react";

const App = () => {
  const pageSize = 3;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" height={"5px"} progress={progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/General"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="General"
                pageSize={pageSize}
                country="in"
                catagory="General"
              />
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="General"
                pageSize={pageSize}
                country="in"
                catagory="General"
              />
            }
          ></Route>
          <Route
            exact
            path="/News"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="General"
                pageSize={pageSize}
                country="in"
                catagory="General"
              />
            }
          ></Route>
          <Route
            exact
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Business"
                pageSize={pageSize}
                country="in"
                catagory="Business"
              />
            }
          ></Route>
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Entertainment"
                pageSize={pageSize}
                country="in"
                catagory="Entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Health"
                pageSize={pageSize}
                country="in"
                catagory="Health"
              />
            }
          ></Route>
          <Route
            exact
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Science"
                pageSize={pageSize}
                country="in"
                catagory="Science"
              />
            }
          ></Route>
          <Route
            exact
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Sports"
                pageSize={pageSize}
                country="in"
                catagory="Sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Technology"
                pageSize={pageSize}
                country="in"
                catagory="Technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
