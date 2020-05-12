import React from "react"
import { Navbar } from "react-bootstrap"
import Footer from "../components/footer"
import { Link } from "gatsby"

export default class Resonate extends React.Component {

    render() {
        return (
            <>
                <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="projectNav" expand="lg"
                collapseOnSelect={true}>
                    <div className="container">
                        <Link to="/">Laura Meehan</Link>
                    </div>
                </Navbar>
                <section className="page-section">
                    <img 
                        className="img-fluid" 
                        src="../images/portfolio/fullsize/2-resonate.jpg" 
                        alt="album page"
                    />
                    <h2 className="text-center mt-4"> Resonate </h2>
                    <hr className="divider my-4"/>
                    <div className="container">
                        <p className="m-3"><span className="mr-2 font-weight-bold"> About: </span> 
                            Resonate was my first main SPA web app that I built while undergoing my apprenticeship. It is a music player that is similar to Spotify. In order to navigate 
                            between the landing page, the library page, then finally onto a specific album I implemented the React Router to help with these page transitions. 
                            It has the ability to play, pause, skip forward, skip backwards, and raise/lower volume.
                        </p>
                        <p className="m-3"><span className="mr-2 font-weight-bold"> Built with: </span> 
                            React, Babel, React Router, and Bootstrap
                        </p>
                    </div>
                </section>
                <Footer />
            </>
        )
    }  
}

