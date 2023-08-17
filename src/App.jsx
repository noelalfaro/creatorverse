import "./App.css";
import { useRoutes } from "react-router-dom";
import About from "./pages/About";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreator from "./pages/ViewCreator";
import ShowCreators from "./pages/ShowCreators";

function App() {
  let element = useRoutes([
    { path: "/about", element: <About /> },
    {
      path: "/",
      element: <ShowCreators />,
    },
    {
      path: "edit-creator/:id",
      element: <EditCreator />,
    },
    {
      path: "view-creator/:id", // Include the :id parameter
      element: <ViewCreator />,
    },
    {
      path: "add-creator",
      element: <AddCreator />,
    },
  ]);
  return element;
}

export default App;
