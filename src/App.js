import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { RootRoutes } from "./router";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {RootRoutes.map((props) => (
          <Route {...props} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
