import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Stats from "./components/Stats/Stats";
import Team from "./components/Team/Team";
import Battle from "./pages/Battle/Battle";
import CreateAttacks from "./pages/CreateAttacks/CreateAttacks";
import CreateTeam from "./pages/CreateTeam/CreateTeam";
import Home from "./pages/Home/Home";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/CreateTeam",
        element: <CreateTeam />,
        children: [
          { path: "Team", element: <Team /> },
          { path: "Stats", element: <Stats /> },
        ],
      },
      {
        path: "/Attacks",
        element: <CreateAttacks />,
      },
      {
        path: "/Battle",
        element: <Battle />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
