import React from "react"

function ResonateAbout() {
    return (
        <>
            <hr />
            <p className="m-3"><span className="mr-2 font-weight-bold"> About: </span> 
                Resonate was my first main SPA web app that I built while undergoing my apprenticeship. It is similar to Spotify. In order to navigate 
                between the landing page, the library page, then finally onto a specific album I implemented the React Router to help with these page transitions. 
                It has the ability to play, pause, skip forward, skip backwards, and raise/lower volume.
            </p>
            <p className="m-3"><span className="mr-2 font-weight-bold"> Built with: </span> 
                React, Babel, React Router, and Bootstrap
            </p>
        </>
    )
}

export default ResonateAbout