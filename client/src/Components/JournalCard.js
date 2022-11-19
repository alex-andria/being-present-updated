import React from "react";

function JournalCard({journal}){
    console.log(journal)

    return(
        <>
            <p>{journal.journal_entry}</p>
        </>
    )
}

export default JournalCard;