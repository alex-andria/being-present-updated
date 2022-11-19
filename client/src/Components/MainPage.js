import React, { useState, useEffect } from "react";
import AddJournal from "./JournalModals/AddJournal";
import OpenJournal from "./JournalModals/OpenJournal";
import CreateJournalEntry from "./CreateJournal";
import JournalCard from "./JournalCard";
// import Logo from "./Logo1.png"

function MainPage({ user, setUser, journals, addJournalEntry }) {

  // modal visible
  const [addEntry, setAddEntry] = useState(false);

  // Open journal card modals
  const [openEntry, setOpenEntry] = useState(false);

  // const [showCreateJournalTab, setShowCreateJournalTab] = useState(false);

  // // user submission for journal entry
  // function submitJournal(e) {
  //   // this would need the info for pushing the journal to the db
  //   console.log("journal added");
  //   e.preventDefault();
  //   setAddEntry(false);
  // }


  if (addEntry === true) {
    return (
      <CreateJournalEntry
        user={user}
        setAddEntry={setAddEntry}
        addEntry={addEntry}
        onAddJournalEntry = {addJournalEntry}
      />
    );
  }

  return (
    <>
      <div className="container-fluid text-center main-stuff">
        <div className="welcome-logo">
          <h2>Welcome {user.first_name}!</h2>
          {/* <img src={Logo} alt=""/> */}
        </div>
        <br></br>
        {/* before merged journal form */}
        {/* Logo/relaxing css */}
        <br></br>
        <div className="add-journal-entry">
          <h2>Be present. Add your entry.</h2>
          {/* Create New Journal */}
          <button onClick={() => setAddEntry(true)} className="btn btn-primary">
            Add Journal
          </button>
        </div>
        {/*Add Journal opens create journal component modal */}
        {/* <CreateJournalEntry
          user={user}
          // setShowCreateJournalTab={setShowCreateJournalTab}
          // showCreateJournalTab={showCreateJournalTab}
          addEntry={addEntry}
          setAddEntry={setAddEntry}
        /> */}
        {/* <AddJournal
          onClose={() => setAddEntry(false)}
          onSubmit={submitJournal}
          show={addEntry}
        /> */}
        {/* Form */}
        <br></br>
        {/* Journal List: */}
        <h2>Journal List Below:</h2>
        {/* before merge list */}
        {/* {console.log(user.journals)} */}
        {/* {user.journals.map((journal) => {
          return <JournalCard journal={journal} key={journal.id} />;
        })} */}
        {journals.map((journal) => {
          return <JournalCard journal={journal} key={journal.id} />;
        })}
        {/* List of Journal-card */}
        <div className="journal-list">
          {/* adds click function to the div of it and shouls open the journal entry in a modal */}
          <div className="journal-entry" onClick={() => setOpenEntry(true)}>
            <div className="journal-image">
              <p>11/17/22</p>
            </div>
            {/* need to figure out how to change the title */}
            <OpenJournal
              onClose={() => setOpenEntry(false)}
              show={openEntry}
              title="Journal title"
            >
              <p>Testing Journal</p>
            </OpenJournal>
            <p>Generated Suggestion</p>
          </div>
          <div className="journal-entry" onClick={() => setOpenEntry(true)}>
            <div className="journal-image">
              <p>11/17/22</p>
            </div>
            <OpenJournal
              onClose={() => setOpenEntry(false)}
              show={openEntry}
              title="Journal title"
            >
              <p>Testing Journal</p>
            </OpenJournal>
            <p>Generated Suggestion</p>
          </div>
          <div className="journal-entry" onClick={() => setOpenEntry(true)}>
            <div className="journal-image">
              <p>11/17/22</p>
            </div>
            <OpenJournal
              onClose={() => setOpenEntry(false)}
              show={openEntry}
              title="Journal title"
            >
              <p>Testing Journal</p>
            </OpenJournal>
            <p>Generated Suggestion</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
