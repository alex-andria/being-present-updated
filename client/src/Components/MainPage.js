import React, { useState, useEffect } from "react";
import AddJournal from "./JournalModals/AddJournal";
import OpenJournal from "./JournalModals/OpenJournal";
import CreateJournalEntry from "./CreateJournal";
import JournalCard from "./JournalCard";
import Logo from "../Logo1.png"

function MainPage({ user, setUser, journals, addJournalEntry }) {

  // modal visible
  const [addEntry, setAddEntry] = useState(false);

  // // Open journal card modals
  // const [openEntry, setOpenEntry] = useState(false);

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
        {/* before merged journal form */}
        {/* Logo/relaxing css */}
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
        {/* before merge list */}
        {/* {console.log(user.journals)} */}
        <div className="journal-list">
          <h2>Journal List Below:</h2>
          <br></br>
          <div className="container journal-entries">
            <div className="row row-cols-auto justify-content-center gy-5">
              {user.journals.map((journal) => {
                return <JournalCard  journal={journal} key={journal.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
