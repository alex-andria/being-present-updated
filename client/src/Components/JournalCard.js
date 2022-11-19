import React from "react";

function JournalCard({journal}){
    console.log("journal card:", journal)

    return(
        <>
            <p>{journal.journal_entry}</p>
        </>
    )
}

export default JournalCard;