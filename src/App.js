import { RouterProvider } from "react-router";
import { router } from "./Route/router/router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
