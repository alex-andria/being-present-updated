import React, { useState } from "react";


function CreateJournalEntry({ addEntry, setAddEntry, user, onAddJournalEntry }) {
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
      setAddEntry(false);
      if (r.ok) {
        // console.log(r);
      } else {
        r.json().then((err) => setErrorMessage(err.errors));
      }
    }).then(onAddJournalEntry);

  }

  function handleBackButton() {
    setAddEntry(!addEntry);
  }

  console.log("user: " + user);
  //opens modal
  // if (!addEntry) {
  //   return null
  // }

  return (
    <>
      {errorMessage}

      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">
              <h4> Enter Journal: </h4>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onClose}></button> */}
            </div>
          </div>
          {/* <form onSubmit={handleSubmit}> */}
          {/* <button onClick={handleBackButton}>Back</button> */}
          <form>
            <div className="modal-body">
              <label name="Date input">What is the date today?</label>
              <input
                className="form-control form-control-sm"
                value={journal_date}
                onChange={(e) => setJournalDate(e.target.value)}
                name="Journal date input"
              ></input>
              <br></br>
              <br></br>
              <label name="Mind input">Mind Activity:</label>
              <input
                className="form-control form-control-sm"
                value={mind}
                onChange={(e) => setMind(e.target.value)}
                name="Mind input"
              ></input>
              <br></br>
              <br></br>
              <label name="Body input">Body Activity:</label>
              <input
                className="form-control form-control-sm"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                name="Body input"
              ></input>
              <br></br>
              <br></br>
              <label name="Body input">Journal Image:</label>
              <input
                className="form-control form-control-sm"
                value={journal_image}
                onChange={(e) => setJournalImage(e.target.value)}
                name="Journal image input"
              ></input>
              <br></br>
              <br></br>
              <label name="Body input">How did you take time for yourself today?</label>
              <textarea
                className="form-control form-control-lg"
                value={journal_entry}
                onChange={(e) => setJournalEntry(e.target.value)}
                name="Journal entry input"
              ></textarea>
              <br></br>
              <br></br>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                type="submit"
              >Fill your cup!</button>
              <button className="btn btn-primary" onClick={handleBackButton}>Back</button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateJournalEntry;
