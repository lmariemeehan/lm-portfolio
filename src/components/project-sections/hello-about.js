import React from "react"

function HelloAbout() {
    return (
        <>
            <hr />
            <p className="m-3"><span className="mr-2 font-weight-bold">About: </span> 
                This was the second SPA web app that I built while undergoing my apprenticeship.
                Definitely more complicated than the last React project. This is a chat app that required adding Firebase in order to utilize both the user 
                authentication feature as well as it's NoSQL database to store user messages. Upon logging in, you are able to add & delete rooms as well as add & delete messages.
            </p>
            <p className="m-3"><span className="mr-2 font-weight-bold"> Built with: </span> 
                React, Babel, React Router, Bootstrap, and Firebase
            </p>
        </>
    )
}

export default HelloAbout