import React, { useState, useEffect } from "react";
import AddJournal from "./JournalModals/AddJournal";
import OpenJournal from "./JournalModals/OpenJournal";
import CreateJournalEntry from "./CreateJournal";
import JournalCard from "./JournalCard";

function MainPage({ user, setUser, journals, setJournal }) {
  const [addEntry, setAddEntry] = useState(false);
  const [openEntry, setOpenEntry] = useState(false);
  const [showCreateJournalTab, setShowCreateJournalTab] = useState(false);

  // user submission for journal entry
  function submitJournal(e) {
    // this would need the info for pushing the journal to the db
    console.log("journal added");
    e.preventDefault();
    setAddEntry(false);
  }

  return (
    <>
      <h2>Welcome {user.first_name}!</h2>
      <br></br>

      {/* before merged journal form */}
      <CreateJournalEntry
        user={user}
        setShowCreateJournalTab={setShowCreateJournalTab}
        showCreateJournalTab={showCreateJournalTab}
      />

      {/* Logo/relaxing css */}
      <br></br>

      <h2>Be present. Add your entry.</h2>
      {/* Create New Journal */}
      <button onClick={() => setAddEntry(true)} className="open-modal">
        Add Journal
      </button>
      <AddJournal
        onClose={() => setAddEntry(false)}
        onSubmit={submitJournal}
        show={addEntry}
      />
      {/* Form */}
      <br></br>

      {/* Journal List: */}
      <h2>Journal List Below:</h2>

      {/* before merge list */}
      {console.log(user.journals)}
      {user.journals.map((journal) => {
        return <JournalCard journal={journal} key={journal.id} />;
      })}

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
    </>
  );
}

export default MainPage;
