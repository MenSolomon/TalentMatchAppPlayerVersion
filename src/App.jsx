import { Route, Routes } from "react-router-dom";
import MotherComponent from "./MotherComponent";
import Dashboard from "./screens/Dashboard";
import Videos from "./screens/Videos";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MotherComponent />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/videos" element={<Videos />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
