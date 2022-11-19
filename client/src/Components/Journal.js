import React from "react";

function Journal({ journal, openEntry, setOpenEntry }) {
    //test
    console.log(journal);

    function handleBackButton() {
        setOpenEntry(!openEntry);
    }

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">
                            <h4>{journal.journal_date}</h4>
                        </div>
                    </div>
                    {/* <form onSubmit={handleSubmit}> */}
                    {/* <button onClick={handleBackButton}>Back</button> */}
                    <div className="modal-body">
                        <p>Mind: {journal.mind} Body: {journal.body}</p>
                        <img src={journal.journal_image} alt=""/>
                        <p>{journal.journal_entry}</p>
                        <br></br>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={handleBackButton}>Back</button>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Journal;