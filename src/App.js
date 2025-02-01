import "./App.css";
import AddUser from "./adduser/addUser";
import User from "./getuser/user";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Update from "./updateuser/update";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;