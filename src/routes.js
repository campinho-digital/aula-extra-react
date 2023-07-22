import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Details from "./pages/details/details";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/details" Component={Details}></Route>
      </Routes>
    </main>
  );
}

export default App;
