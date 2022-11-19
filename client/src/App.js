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

  useEffect(() => {
    //auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)});
      }
    });
  }, []);

  // useEffect(() => {
  //   fetch(`/journals/:id/${user.id}`)
  //     .then((r) => r.json())
  //     .then((journals) => {
  //       setJournals(journals);
  //       //   history.push("/")
  //     });
  // }, []);


// FETCH FOR USER'S JOURNALS???
// i'm hoping it can be this easy, but unsure if the user.journals will work right off the bat, may need to stick some console logs in to see where it's coming back

  // useEffect(() => {
  //   // auto-fetch journals
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => {
  //         console.log("user fetch 2:", user)
  //         setJournals(user.journals)
  //       });
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   //auto-login
  //   fetch("/journals").then((r) => {
  //     if (r.ok) {
  //       r.json().then((journals) => {
  //         return journals.filter((journal) => {

  //         })
  //       });
  //     }
  //   });
  // }, []);


// CALLBACK FUNCTION TO PASS DOWN TO JOURNAL ENTRY POST REQUEST

function addJournalEntry(newEntry) {
  setJournals([...journals, newEntry])
}


  console.log("journals", journals);

  if (!user) return <LogInPage onLogin={setUser} />

  return (
    // <div className="App">
    //   <h1>Page Count: {count}</h1>
    // </div>
    <>
      <NavBar user={user} setUser={setUser}/>
      <main>
        <Routes>
          <Route path="/" element={<MainPage user={user} setUser={setUser} journals={journals} addJournalEntry={addJournalEntry}/>} />
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