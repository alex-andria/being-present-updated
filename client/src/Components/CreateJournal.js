import React, { useState } from "react";
import Axios from 'axios'


function CreateJournalEntry({ addEntry, setAddEntry, user, onAddJournalEntry }) {
  const [mind, setMind] = useState(false);
  const [body, setBody] = useState(false);
  const [url, setUrl] = useState("");
  const [journal_image, setJournalImage] = useState("");
  const [journal_entry, setJournalEntry] = useState("");
  const [journal_date, setJournalDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleUpload(e) {
    e.preventDefault()
    const data = new FormData();
    data.append('file', journal_image);
    data.append('upload_preset', 'being_present');

    Axios.post('https://api.cloudinary.com/v1_1/jenna1568/image/upload', data)
      .then((response) => {
          setUrl(response.data.url);
      })
      .catch((err) => console.log(err));
  } 

  function handleSubmit(e) {
    e.preventDefault();


    const journal = {
      mind: mind,
      body: body,
      journal_image: url,
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
        // added from updating journal code
        const jsonResp = r.json()
        console.log("journal entry resp", jsonResp);
        return jsonResp
      } else {
        r.json().then((err) => setErrorMessage(err.errors));
      }
    }).then(onAddJournalEntry);



  }

  function handleBackButton() {
    setAddEntry(!addEntry);
  }

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
                type="date"
                className="form-control form-control-sm"
                value={journal_date}
                onChange={(e) => setJournalDate(e.target.value)}
                name="Journal date input"
              ></input>
              <br></br>
              <div className="row">
                <div className="col-6">
                  <label name="Mind input">Mind Activity:</label>
                  <select id="myMindSelect" className="form-control form-control-sm" onChange={(e) => setMind(e.target.value)}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>
                <div className="col-6">
                  <label name="Body input">Body Activity:</label>
                  <select id="myMindSelect" className="form-control form-control-sm" onChange={(e) => setBody(e.target.value)}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>
              </div>
              <br></br>
              <label name="Body input">Journal Image:</label>
              <input
                className="form-control form-control-sm"
                type="file"
                accept='image/*'
                // value={journal_image}
                id= 'journal_image_upload'
                onChange={(e) => setJournalImage(e.target.files[0])}
                // onChange={(e) => console.log("e.target.files:", e.target.files[0])}
                name="Journal image input"
              ></input>
              <button className="btn btn-primary" onClick={handleUpload}>Upload Photo</button>
              <br></br>
              <label name="Body input">How did you take time for yourself today?</label>
              <textarea
                className="form-control form-control-lg"
                value={journal_entry}
                onChange={(e) => setJournalEntry(e.target.value)}
                name="Journal entry input"
                rows="10"
                height="100%"
              ></textarea>
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
