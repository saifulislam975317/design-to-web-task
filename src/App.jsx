import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="w-[1536px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
