import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <div id="backgroundColor" className="w-[1440px] mx-auto ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
