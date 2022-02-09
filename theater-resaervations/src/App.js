import HomePage from "./Pages/HomePage";
import { DateTime } from "luxon";
import { useEffect } from "react";
import NotFoundPage from "./Pages/NotFoundPage";
import LoadingComponent from "./Components/Loading/LoadingComponent";
import LoginFormComponent from "./Components/LoginForm/LoginFormComponent";
import LoginPage from "./Pages/LoginPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookingPage from "./Pages/BookingPage";

function App() {
  /*  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:3004/shows")
      .then((response) => response.json())
      .then((data) => console.log(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);*/
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/">
            <Route path="Login" element={<LoginPage />}></Route>
            <Route path="/*" element={<NotFoundPage />}></Route>
            <Route index element={<HomePage />}></Route>
            <Route path="Booking">
              <Route path=":email" element={<BookingPage />}></Route>
              <Route index element={<BookingPage />}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
