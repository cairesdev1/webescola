import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "../Pages/error-page";
import About from "../Pages/About";
import App from "../App";
import Contact from "../Pages/Contact";
import Platform from "../Pages/Platform";
import Parceiros from "../Pages/Parceiros";
import TrabalheComigo from "../Pages/TrabalheComigo";
import CursosPage from "../Pages/CursosPage";
import CursoView from "../Pages/CursoView";
import Login from "../Pages/Auths/Login";
import Register from "../Pages/Auths/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/sobre",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contato",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/plataforma",
        element: <Platform />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/parceiros",
        element: <Parceiros />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/jobs",
        element: <TrabalheComigo />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cursos",
        element: <CursosPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cursos/:cursoId",
        element: <CursoView />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cadastro",
        element: <Register />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
