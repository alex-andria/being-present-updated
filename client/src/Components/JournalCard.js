import React, { useState } from "react";
import Journal from "./Journal";

function JournalCard({ journal}) {
    const [openEntry, setOpenEntry] = useState(false);
    // console.log(journal)

    if (openEntry === true) {
        return (
            <Journal
                setOpenEntry={setOpenEntry}
                openEntry={openEntry}
                journal={journal}
            />
        );
    }

    return (
        <>
            <div className="journal-entry" onClick={() => setOpenEntry(true)}>
                <div className="journal-image"><p>{journal.journal_date}</p></div>
            </div>
        </>
    )
}

export default JournalCard;