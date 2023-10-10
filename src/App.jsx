import { Route, Routes } from "react-router-dom";
import MotherComponent from "./MotherComponent";
import Dashboard from "./screens/Dashboard";
import Videos from "./screens/Videos";
import Statistics from "./screens/Statistics";
import Favorites from "./screens/Favorites";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MotherComponent />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/Statistics" element={<Statistics />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
