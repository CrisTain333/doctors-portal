import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
 
  return (
    <>
    <div className="  dark:bg-gray-900 dark:text-gray-100">

      <RouterProvider router={router}></RouterProvider>
    </div>
    </>
  );
}

export default App;
