import { Route, Routes } from "react-router-dom";
import MotherComponent from "./MotherComponent";
import Dashboard from "./screens/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MotherComponent />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
