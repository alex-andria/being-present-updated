import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar"
import LogInPage from "./Components/LogInPage";
import MainPage from "./Components/MainPage";
import {Routes, Route } from "react-router-dom";
import "./App.css";
// import Journal from "./Components/Journal";

function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [journals, setJournals] = useState([]);

  console.log("#1")
  useEffect(() => {
    //auto-login
    console.log("#2")

    fetch("/me").then((r) => {
      console.log("***inside fetch /me")
      if (r.ok) {
        console.log("r:", r)
        r.json().then((user) => setUser(user));
      }
    })
    }, []);

// CALLBACK FUNCTION TO PASS TO LOGIN SO STATE RESETS AT THE TOP LEVEL COMPONENT INSTEAD (NEEDED THIS FOR JOURNALS)

function onLogIn(loggedInUser) {
  setUser(loggedInUser)
  fetch('/journals').then((r) => {
    console.log("***inside journals")
    if (r.ok) {
      r.json().then((journals) => {
        console.log("journals:", journals)
        console.log("user:", loggedInUser)
        setJournals(journals.filter((journal) => journal.user.id === loggedInUser.id))
      })
    }
  })
}

// CALLBACK FUNCTION TO PASS DOWN TO JOURNAL ENTRY POST REQUEST

function onAddJournalEntry(newEntry) {
  setJournals([...journals, newEntry])
}


  // console.log(journals);

  if (!user) return <LogInPage onLogin={onLogIn} />

  return (
    // <div className="App">
    //   <h1>Page Count: {count}</h1>
    // </div>
    <>
      <NavBar user={user} setUser={setUser}/>
      <main>
        <Routes>
          <Route path="/" element={<MainPage user={user} onLogIn={onLogIn} journals={journals} onAddJournalEntry={onAddJournalEntry}/>} />
        </Routes>
      </main>
    </>

    
  );
}

export default App;

// cursor parking lot
// -------------------
// |                 |
// |                 | 
// |                 |
// -------------------