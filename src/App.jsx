import Sidenav from "./components/sidenav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DepositDetails from "./pages/DepositDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/confirm-cheque",
    element: <DepositDetails />,
  },
]);

const App = () => {
  return (
    <div className="h-screen">
      <Sidenav>
        <RouterProvider router={router} />
      </Sidenav>
    </div>
  );
};

export default App;
