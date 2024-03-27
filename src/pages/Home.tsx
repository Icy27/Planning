import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Planning</h1>

      <nav>
        <Link to="/planning/">Home</Link>
        {" | "}
        <Link to="/planning/products">Products</Link>
        {" | "}
        <Link to="/planning/contact">Contact</Link>
      </nav>

      <p className="read-the-docs">
        Welcome to Planning!
        <br /> Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
