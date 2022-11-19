import React, { useState } from "react";

function CreateJournalEntry({ setShowCreateJournalTab, user, showCreateJournalTab}) {
  const [mind, setMind] = useState(false);
  const [body, setBody] = useState(false);
  const [journal_image, setJournalImage] = useState("");
  const [journal_entry, setJournalEntry] = useState("");
  const [journal_date, setJournalDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const journal = {
      mind: mind,
      body: body,
      journal_image: journal_image,
      user_id: user.id,
      journal_entry: journal_entry,
      journal_date: journal_date,
    };

    fetch("http://localhost:3000/journals", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(journal),
    }).then((r) => {
      setShowCreateJournalTab(false);
      if (r.ok) {
      } else {
        r.json().then((err) => setErrorMessage(err.errors));
      }
    });
  }

  function handleBackButton() {
    setShowCreateJournalTab(!showCreateJournalTab);
  }

  return (
    <>
      {/* <button onClick={handleBackButton}>Back</button> */}
      <button onClick={handleBackButton}>Back</button>
      <h1> Enter Journal: </h1>

      {errorMessage}
      <form>

        <label name="Date input">What is the date today?</label>
        <input
          value={journal_date}
          onChange={(e) => setJournalDate(e.target.value)}
          name="Journal date input"
        ></input>

        <label name="Mind input">Mind Activity:</label>
        <input
          value={mind}
          onChange={(e) => setMind(e.target.value)}
          name="Mind input"
        ></input>

        <br></br>
        <br></br>

        <label name="Body input">Body Activity:</label>
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name="Body input"
        ></input>

        <br></br>
        <br></br>

        <label name="Body input">Journal Image:</label>
        <input
          value={journal_image}
          onChange={(e) => setJournalImage(e.target.value)}
          name="Journal image input"
        ></input>

        <br></br>
        <br></br>

        <label name="Body input">How did you take time for yourself today?</label>
        <input
          value={journal_entry}
          onChange={(e) => setJournalEntry(e.target.value)}
          name="Journal entry input"
        ></input>

        <br></br>
        <br></br>

        <input
          onClick={handleSubmit}
          type="submit"
          value="Fill your cup!"
        ></input>
      </form>
    </>
  );
}

export default CreateJournalEntry;
