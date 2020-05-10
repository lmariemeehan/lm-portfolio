import React from "react"
import { Link } from "gatsby"

export default class Resonate extends React.Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 mb-5" id="mainNav" expand="lg"
                collapseOnSelect={true}>
                    <div className="container">
                        <span className="navbar-brand mb-5"><Link to="/">Laura Meehan</Link></span>
                    </div>
                </nav>
                <div className="container text-center ">
                    <img className="img-fluid mt-5" src="https://res.cloudinary.com/laurameehan/image/upload/v1589091412/Screen_Shot_2020-05-09_at_11.12.00_PM_kjjgts.png" alt="album page" height={400} width={800} />
                        <h1 className="text-center my-5">Resonate</h1>
                        <p className="m-3"><span className="mr-2 font-weight-bold"> About: </span> 
                            Resonate was my first main SPA web app that I built while undergoing my apprenticeship. It is a music player that is similar to Spotify. In order to navigate 
                            between the landing page, the library page, then finally onto a specific album I implemented the React Router to help with these page transitions. 
                            It has the ability to play, pause, skip forward, skip backwards, and raise/lower volume.
                        </p>
                        <p className="m-3"><span className="mr-2 font-weight-bold"> Built with: </span> 
                            React, Babel, React Router, and Bootstrap
                        </p>
                </div>
            </>
        )
    }  
}