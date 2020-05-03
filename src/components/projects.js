import React from "react"
import MemeAbout from "./project-sections/meme-about"
import ResonateAbout from "./project-sections/resonate-about"
import HelloAbout from "./project-sections/hello-about"
import InQuisitiveAbout from "./project-sections/inquisitive-about"

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            viewMeme: false,
            viewResonate: false,
            viewHello: false,
            viewInquisitive: false
        }
        this.handleMemeClick = this.handleMemeClick.bind(this)
        this.handleResonateClick = this.handleResonateClick.bind(this)
        this.handleHelloClick = this.handleHelloClick.bind(this)
        this.handleInquisitiveClick = this.handleInquisitiveClick.bind(this)
    }

    handleMemeClick() {
        this.setState(prevState => {
            return {
                viewMeme: !prevState.viewMeme
            }
        })
    }

    handleResonateClick() {
        this.setState(prevState => {
            return {
                viewResonate: !prevState.viewResonate
            }
        })
    }

    handleHelloClick() {
        this.setState(prevState => {
            return {
                viewHello: !prevState.viewHello
            }
        })
    }

    handleInquisitiveClick() {
        this.setState(prevState => {
            return {
                viewInquisitive: !prevState.viewInquisitive
            }
        })
    }

    render() {
        let displayMemeAbout = this.state.viewMeme ? <MemeAbout /> : null
        let displayResonateAbout = this.state.viewResonate ? <ResonateAbout /> : null
        let displayHelloAbout = this.state.viewHello ? <HelloAbout /> : null
        let displayInquisitiveAbout = this.state.viewInquisitive ? <InQuisitiveAbout /> : null

        return (
            <section className="page-section bg-dark" id="portfolio">
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
                                <div className="card-body text-center">
                                    <h3 className="card-title my-3"> Memes </h3>
                                    <p className="card-text text-muted text-uppercase"> React Meme Generator app </p>
                                    <a className="btn btn-primary card-link my-2" href="https://lauras-memegenerator.netlify.app/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                                    <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/meme-generator" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                                </div>
                                <div className="card-footer">
                                    <h5 className="text-center" onClick={this.handleMemeClick}>Learn More <i class="fas fa-caret-down"></i></h5>
                                    {displayMemeAbout}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-light border-0 shadow-lg mb-4"> 
                                <img 
                                    className="card-img-top"
                                    src="https://res.cloudinary.com/laurameehan/image/upload/v1585115417/pattern_tlysrn.png" 
                                    alt="music pattern" />
                            <div className="card-body text-center">
                                <h3 className="card-title my-3"> Resonate </h3>
                                <p className="card-text text-muted text-uppercase"> React Music player</p>
                                <a className="btn btn-primary card-link my-2" href="https://lmariemeehan-bloc-jams-react.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                                <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/Resonate" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                            </div>
                            <div className="card-footer">
                                <h5 className="text-center" onClick={this.handleResonateClick}>Learn More <i class="fas fa-caret-down"></i></h5>
                                {displayResonateAbout}
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card bg-light border-0 shadow-lg mb-4">
                            <img 
                                className="card-img-top" 
                                src="https://res.cloudinary.com/laurameehan/image/upload/v1588021203/pattern_5_rwm2vu.png" 
                                alt="chat pattern" />
                            <div className="card-body text-center">
                                <h3 className="card-title my-3"> Hello </h3>
                                <p className="card-text text-muted text-uppercase"> React Chat app </p>
                                <a className="btn btn-primary card-link my-2" href="https://lmariemeehan-bloc-chat-react.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                                <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/Hello" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                            </div>
                            <div className="card-footer">
                                <h5 className="text-center" onClick={this.handleHelloClick}>Learn More <i class="fas fa-caret-down"></i></h5>
                                {displayHelloAbout}
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card bg-light border-0 shadow-lg">
                            <img 
                                className="card-img-top" 
                                src="https://res.cloudinary.com/laurameehan/image/upload/v1585117001/pattern_3_forpgk.png" 
                                alt="wikipedia pattern" />
                            <div className="card-body text-center">
                                <h3 className="card-title my-3"> InQuisitive </h3>
                                <p className="card-text text-muted text-uppercase"> Node.js Wikipedia app </p>
                                <a className="btn btn-primary card-link my-2" href="https://lmariemeehan-blocipedia.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                                <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/InQuisitive" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                            </div>
                            <div className="card-footer">
                                <h5 className="text-center" onClick={this.handleInquisitiveClick}>Learn More <i class="fas fa-caret-down"></i></h5>
                                {displayInquisitiveAbout}
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