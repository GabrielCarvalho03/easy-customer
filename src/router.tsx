import { HomeLayout } from "@components/layout/layout";
import { Customer } from "@pages/customer/customer";
import { Home } from "@pages/home/home";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/home/:userName",
    element: <HomeLayout />,
    children: [
      {
        path: "clientes",
        element: <Home />,
      },
      {
        path: "Selecionado",
        element: <Customer />,
      },
    ],
  },
]);
