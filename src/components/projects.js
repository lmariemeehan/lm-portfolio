import React from "react"
import MemeAbout from "./project-sections/meme-about"
import ResonateAbout from "./project-sections/resonate-about"
import HelloAbout from "./project-sections/hello-about"
import InQuisitiveAbout from "./project-sections/inquisitive-about"
import InrecordAbout from "./project-sections/inrecord-about"
import { Link } from "gatsby"

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            viewMeme: false,
            viewResonate: false,
            viewHello: false,
            viewInquisitive: false,
            viewInrecord: false
        }
        this.handleMemeClick = this.handleMemeClick.bind(this)
        this.handleResonateClick = this.handleResonateClick.bind(this)
        this.handleHelloClick = this.handleHelloClick.bind(this)
        this.handleInquisitiveClick = this.handleInquisitiveClick.bind(this)
        this.handleInrecordClick = this.handleInrecordClick.bind(this)
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

    handleInrecordClick(){
        this.setState(prevState => {
            return {
                viewInrecord: !prevState.viewInrecord
            }
        })
    }

    render() {
        let displayMemeAbout = this.state.viewMeme ? <MemeAbout /> : null
        let displayResonateAbout = this.state.viewResonate ? <ResonateAbout /> : null
        let displayHelloAbout = this.state.viewHello ? <HelloAbout /> : null
        let displayInquisitiveAbout = this.state.viewInquisitive ? <InQuisitiveAbout /> : null
        let displayInrecordAbout = this.state.viewInrecord ? <InrecordAbout /> : null

        return (
            <section className="bg-dark" id="portfolio">
                <h2 className="text-center text-white"> Portfolio </h2>
                <hr className="divider light my-4"/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col mx-2">
                            <div className="card bg-light border-0 shadow-lg my-4">
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
                                <div className="card-footer text-center">
                                    <button className="btn btn-lg" onClick={this.handleMemeClick} onKeyDown={this.handleMemeClick}>Learn More <i className="fas fa-caret-down"></i></button>
                                    {displayMemeAbout}
                                </div>
                            </div>
                        </div>
                        <div className="col mx-2">
                            <div className="card bg-light border-0 shadow-lg my-4"> 
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
                                <div className="card-footer text-center">
                                    <Link to="./resonate">Learn More <i className="fas fa-caret-down"></i></Link>
                                    {displayResonateAbout}
                                </div>
                            </div>
                        </div>
                        <div className="col mx-2">
                            <div className="card bg-light border-0 shadow-lg my-4">
                                <img 
                                    className="card-img-top" 
                                    src="https://res.cloudinary.com/laurameehan/image/upload/v1588021203/pattern_5_rwm2vu.png" 
                                    alt="chat pattern" />
                                <div className="card-body text-center">
                                    <h3 className="card-title my-3"> Hello </h3>
                                    <p className="card-text text-muted text-uppercase"> React Chat - Firebase app </p>
                                    <a className="btn btn-primary card-link my-2" href="https://lmariemeehan-bloc-chat-react.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                                    <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/Hello" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-lg" onClick={this.handleHelloClick} onKeyDown={this.handleHelloClick}>Learn More <i className="fas fa-caret-down"></i></button>
                                    {displayHelloAbout}
                                </div>
                            </div>
                        </div>
                        <div className="col mx-2">
                            <div className="card bg-light border-0 shadow-lg my-4">
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
                                <div className="card-footer text-center">
                                    <button className="btn btn-lg" onClick={this.handleInquisitiveClick} onKeyDown={this.handleInquisitiveClick}>Learn More <i className="fas fa-caret-down"></i></button>
                                    {displayInquisitiveAbout}
                                </div>
                            </div>
                        </div>
                        <div className="col mx-2">
                            <div className="card bg-light border-0 shadow-lg my-4">
                                <img 
                                    className="card-img-top" 
                                    src="https://res.cloudinary.com/laurameehan/image/upload/v1588053902/pattern_6_f5b5tv.png" 
                                    alt="medical pattern" />
                                <div className="card-body text-center">
                                    <h3 className="card-title my-3"> INRecord </h3>
                                    <p className="card-text text-muted text-uppercase">Node.js INR tracking app</p>
                                    <a className="btn btn-primary card-link my-2" href="https://lmariemeehan-inr.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                                    <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/inr" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                                </div>  
                                <div className="card-footer text-center">
                                    <button className="btn btn-lg" onClick={this.handleInrecordClick} onKeyDown={this.handleInrecordClick}>Learn More <i className="fas fa-caret-down"></i></button>
                                    {displayInrecordAbout}
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