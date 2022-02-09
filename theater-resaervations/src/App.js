import HomePage from "./Pages/HomePage";
import { DateTime } from "luxon";
import { useEffect } from "react";
import NotFoundPage from "./Pages/NotFoundPage";
import LoadingComponent from "./Components/Loading/LoadingComponent";

function App() {
  /*  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:3004/shows")
      .then((response) => response.json())
      .then((data) => console.log(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);*/
  return <HomePage></HomePage>;
}

export default App;
