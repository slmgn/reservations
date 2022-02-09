import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import LoadingComponent from "./Components/Loading/LoadingComponent";
import LoginPage from "./Pages/LoginPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./Pages/BookingPage";
import { Suspense } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Router>
        <Suspense fallback={<LoadingComponent />}>
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
        </Suspense>
      </Router>
    </Box>
  );
}

export default App;
