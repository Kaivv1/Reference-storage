import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import { Router } from "react-router-dom";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ element: <Home />, index: true }],
  },
]);

function App() {
  return (
    <div>
      <Router router />
    </div>
  );
}

export default App;
