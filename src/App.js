
import "./App.css";
import Home from "./components/Home/index.js";
import Navbar from "./components/Navbar/index.js";
import { useState } from "react";
import Repo from "./components/Repo/index.js";

function App() {
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");

  return (
    <div>
      <Navbar />

      <Repo owner={owner} setOwner={setOwner} repo={repo} setRepo={setRepo} />
      {owner && repo ? <Home owner={owner} repo={repo} /> : <></>}
    </div>
  );
}

export default App;