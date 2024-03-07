import { useState } from "react";
import Navbar from "./components/Navbar";
import Cookies from "js-cookie";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${Cookies.get("dark") === "true" ? "dark" : ""} h-screen`}>
      <div className={`App   dark:bg-[#292929] h-screen`}>
        <Navbar setDark={setDark} dark={dark} />
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="dark:text-blue-600 text-3xl">Hello Ali</h1>
          <p className="dark:text-blue-600">just simple task you asked</p>
        </div>
      </div>
    </div>
  );
}

export default App;
