import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "properties", element: <Properties /> },
      { path: "property/:id", element: <PropertyDetail /> },
      { path: "contact", element: <Contact /> },
      { path: "sold", element: <Properties /> },
      { path: "commercial", element: <Properties /> },
      { path: "valuation", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
