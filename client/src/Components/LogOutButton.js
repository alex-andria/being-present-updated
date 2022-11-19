import React from "react";

function LogOutButton({setUser}){
    function handleLogOut() {
        fetch("http://localhost:3000/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
      return <button onClick={handleLogOut}>Log Out</button>;
}

export default LogOutButton;