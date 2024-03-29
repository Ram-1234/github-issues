import React, { useState } from "react";

const Repo = (props) => {
  const [localrepo, setLocalRepo] = useState("");
  const [localowner, setLocalOwner] = useState("");

  const updateOwner = (e) => {
    setLocalOwner(e.target.value);
  };

  const updateRepo = (e) => {
    setLocalRepo(e.target.value);
  };

  const handleClick = () => {
    if (localrepo === "") {
      alert("Enter the Repo Name");
    } else if (localowner === "") {
      alert("Enter the Organisations Name");
    } else {
      props.setRepo(localrepo);
      props.setOwner(localowner);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the Organisation's name"
        value={localowner ? localowner : ""}
        onChange={updateOwner}
      />
      <br />
      <input
        type="text"
        placeholder="Enter the Repo's Name "
        value={localrepo ? localrepo : ""}
        onChange={updateRepo}
      />
      <br />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default Repo;