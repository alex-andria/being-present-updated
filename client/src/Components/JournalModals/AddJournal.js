import React from "react";
import "./journalmodal.css"

function AddJournal(props) {
  if (!props.show) {
    return null
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">How where you present today?</h4>
        </div>
        <form onSubmit={props.onSubmit}>
          <div className="modal-body">
            <textarea rows={25} cols={55}></textarea>
          </div>
          <div className="modal-footer">
            {/* <button className="modal-submit" onClick={props.onClose}>Close</button> */}
            <button type="submit" onClick={props.onSubmit}>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddJournal;