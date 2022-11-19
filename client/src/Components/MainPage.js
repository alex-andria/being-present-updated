import React, { useState } from "react";
import CreateJournalEntry from "./CreateJournal";
import JournalCard from "./JournalCard";
import Logo from "../Logo1.png"

function MainPage({ user, setUser, journals, addJournalEntry }) {

  // modal visible
  const [addEntry, setAddEntry] = useState(false);

  // const [showCreateJournalTab, setShowCreateJournalTab] = useState(false);


  if (addEntry === true) {
    return (
      <CreateJournalEntry
        user={user}
        setAddEntry={setAddEntry}
        addEntry={addEntry}
        onAddJournalEntry={addJournalEntry}
      />
    );
  }

  return (
    <>
      <div className="container-fluid text-center main-stuff">
        <div className="welcome-logo">
          <h2>Welcome {user.first_name}!</h2>
          <img src={Logo} alt="" />
        </div>
        <br></br>
        <div className="add-journal-entry">
          <h2>How were you present with yourself today?</h2>
          {/* Create New Journal */}
          <button onClick={() => setAddEntry(true)} className="btn btn-primary">
            Today I...
          </button>
        </div>

        <br></br>
        <div className="journal-list">
          <h2>Journal Entries:</h2>
          <br></br>
          <div className="container journal-entries">
            <div className="row row-cols-auto justify-content-center gy-5">
              {/* {user.journals.map((journal) => {
                return <JournalCard  journal={journal} key={journal.id} />;
              })} */}
              {/* elvis check on journal id key */}
              {journals.map((journal) => {
                return <JournalCard  journal={journal} key={journal?.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
