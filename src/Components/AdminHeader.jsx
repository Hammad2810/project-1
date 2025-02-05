import React from "react";

const AdminHeader = () => {

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "")
    window.location.reload()
  }


  return <div className="flex items-end justify-between">
  <h1 className="text-2xl"> Hello 
    <br /> <span className="text-3xl font-bold">Hammad ✔</span>
  </h1>
  <button onClick={logOutUser} className="bg-red-900 text-lg text-white rounded inline-none font-bold py-3 px-5">Log Out</button>
</div>;
};

export default AdminHeader;
