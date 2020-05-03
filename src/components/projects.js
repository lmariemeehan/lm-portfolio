import React from "react"

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            viewPortfolioCard: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

  handleClick() {
    this.setState(prevState => {
      return {
        viewPortfolioCard: !prevState.viewPortfolioCard
      }
    })
  }

    render() {
        return (
            <section className="page-section bg-dark" id="projects">
                <h2 className="text-center text-white mt-0"> Portfolio </h2>
                <hr className="divider light my-4"/>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col">
                        <div className="card bg-light border-0 shadow-lg mb-4">
                            <img 
                            className="card-img-top" 
                            src="https://res.cloudinary.com/laurameehan/image/upload/v1588020376/pattern_4_asdvwk.png" 
                            alt="chat pattern" />
                            <div className="card-body">
                            <h3 className="card-title my-3"> Memes </h3>
                            <p className="card-text text-muted text-uppercase"> React.js Meme Generator app </p>
                            <p className="card-text"><span className="mr-2 font-weight-bold"> Built with: </span> React, API for images, and CSS for style.</p>
                            <a className="btn btn-primary card-link my-2" href="https://lauras-memegenerator.netlify.app/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                            <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/meme-generator" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                            <ul className="nav nav-tabs">
                                <li className="nav-item" onClick={this.handleClick}>Links</li>
                                <li className="nav-item" onClick={this.handleClick}>About</li>
                                <li className="nav-item" onClick={this.handleClick}>Tech</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                            <div className="card bg-light border-0 shadow-lg mb-4"> 
                            <img 
                            className="card-img-top"
                            src="https://res.cloudinary.com/laurameehan/image/upload/v1585115417/pattern_tlysrn.png" 
                            alt="music pattern" />
                            <div className="card-body h-100">
                            <h3 className="card-title my-3"> Resonate </h3>
                            <p className="card-text text-muted text-uppercase"> React.js Music player</p>
                            <p className="mb-2">
                                <span className="mr-2 font-weight-bold"> About: </span> 
                                Resonate was my first main SPA web app that I built while undergoing my apprenticeship. It is similar to Spotify. In order to navigate 
                                between the landing page, the library page, then finally onto a specific album I implemented the React Router to help with these page transitions. 
                                It has the ability to play, pause, skip forward, skip backwards, and raise/lower volume.
                            </p>
                            <p className="card-text"><span className="mr-2 font-weight-bold"> Built with: </span> 
                                React, Babel, React Router, and Bootstrap
                            </p>
                            <a className="btn btn-primary card-link my-2" href="https://lmariemeehan-bloc-jams-react.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                            <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/Resonate" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card bg-light border-0 shadow-lg mb-4">
                            <img 
                            className="card-img-top" 
                            src="https://res.cloudinary.com/laurameehan/image/upload/v1588021203/pattern_5_rwm2vu.png" 
                            alt="chat pattern" />
                            <div className="card-body">
                            <h3 className="card-title my-3"> Hello </h3>
                            <p className="card-text text-muted text-uppercase"> React.js Chat app </p>
                            <p className="mb-2"><span className="mr-2 font-weight-bold">About: </span> 
                                This was the second SPA web app that I built while undergoing my apprenticeship.
                                Definitely more complicated than the last React project. This is a chat app that required adding Firebase in order to utilize both the user 
                                authentication feature as well as it's NoSQL database to store user messages. Upon logging in, you are able to add & delete rooms as well as add & delete messages.</p>
                            <p className="card-text"><span className="mr-2 font-weight-bold"> Built with: </span> React, Babel, 
                                React Router, Bootstrap, and Firebase</p>
                            <a className="btn btn-primary card-link my-2" href="https://lmariemeehan-bloc-chat-react.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                            <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/Hello" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card bg-light border-0 shadow-lg">
                            <img 
                            className="card-img-top" 
                            src="https://res.cloudinary.com/laurameehan/image/upload/v1585117001/pattern_3_forpgk.png" 
                            alt="wikipedia pattern" />
                            <div className="card-body bg-light">
                            <h3 className="card-title my-3"> InQuisitive </h3>
                            <p className="card-text text-muted text-uppercase"> Node.js Wikipedia app </p>
                            <p className="card-text"><span className="mr-2 font-weight-bold">About: </span> 
                                This is a wikipedia app with the ability to create, share, and collaborate markdown wikis. Users are able to create wikis on either a 
                                public level or on a private level depending on their status. Users can upgrade to premium level thereby allowing him/her to make private wikis to share with
                                only people of their choice. This is done by making a payment through Stripe (which is an API) that I added.</p>
                            <p className="card-text"><span className="mr-2 font-weight-bold">Built with: </span> 
                                Node.js, Express.js, Morgan, Stripe API, Sendgrid API, Passport, Sequelize, Jasmine, Markdown, bcrypt, and PostgreSQL.</p>
                            <a className="btn btn-primary card-link my-2" href="https://lmariemeehan-blocipedia.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                            <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/InQuisitive" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card bg-light border-0 shadow-lg">
                            <img 
                            className="card-img-top" 
                            src="https://res.cloudinary.com/laurameehan/image/upload/v1588053902/pattern_6_f5b5tv.png" 
                            alt="medical pattern" />
                            <div className="card-body bg-light">
                            <h3 className="card-title my-3"> INRecord </h3>
                            <p className="card-text text-muted text-uppercase">Node.js INR & Medication tracking app</p>
                            <p className="card-text"><span className="mr-2 font-weight-bold">About: </span>
                                I built this app for my husband. Long story short, my husband had a heart surgery several years ago in order to replace his malfunctioning aortic valve with a mechanical one. Now on a regular basis, 
                                he gets his "INR" levels checked to make sure he is within a specific range (if he is not in range, then a stroke is a possibility which means his medication dosages gets adjusted accordingly to get him back in range). 
                                I built this app so that he could have a visual tool where he could enter and view all of his INR results in one place. To stay organized, I added a place where he could also keep track of all of his medications and 
                                their dosages as well a place to keep track of his doctor appointments.</p>
                            <p className="card-text"><span className="mr-2 font-weight-bold">Built with: </span> Node.js, Express.js, Passport, Sequelize, Jasmine, 
                                bcrypt, and MySQL.</p>
                            <a className="btn btn-primary card-link my-2" href="https://lmariemeehan-inr.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                            <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/inr" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>   
            </section>
        )
    }
}

export default Projects