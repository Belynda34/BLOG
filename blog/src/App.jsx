import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Home from "./pages/Home";
import "./styles.scss";

function App() {
 const Layout = () => {
   return (
    <>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </>
     );
   };

  const router = createBrowserRouter([
    {
      path: "/",
     element: <Layout/>,
      children: [
        {
          path: "/",
          element:<Home/>,
        },
        {
          path: "/post/:id",
          element: <Single />,
        },
        {
          path: "/write",
          element: <Write/>,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
