import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

import { Icon } from "@iconify/react"
import gatsbyIcon from "@iconify/icons-simple-icons/gatsby"
import herokuIcon from "@iconify/icons-simple-icons/heroku"
import firebaseIcon from "@iconify/icons-simple-icons/firebase"
import postgresqlIcon from "@iconify/icons-simple-icons/postgresql"
import jqueryIcon from "@iconify/icons-simple-icons/jquery"
import nextjsIcon from "@iconify/icons-logos/nextjs"
import expressIcon from "@iconify/icons-logos/express"
import mysqlIcon from "@iconify/icons-logos/mysql"
import consoleSqlOutlined from "@iconify/icons-ant-design/console-sql-outlined"
import responsiveIcon from "@iconify/icons-mdi/responsive"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Laura Meehan"/>
        <section className="page-section bg-secondary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0"> About </h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">I've decided to make a career change after four years in payroll accounting
                 to pursue web development because it embodies what I love to do most, which is to create. After discovering web 
                 development and spending upwards to a year of learning on my own, I decided to immerse myself in Bloc's (now Thinkful's) 
                 full-stack development apprenticeship program where my love for code and problem-solving intensified. Since Bloc, I make it a 
                 point to learn something new everyday so that I can be a slightly better developer than I was yesterday.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="skills">
          <div className="container">
            <h2 className="text-center mt-0"> Skills </h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                  <h3 className="h4 mb-2"> Languages </h3>
                  <p className="text-muted mb-0"><i className="fab fa-html5 mr-2"></i>HTML</p>
                  <p className="text-muted mb-0"><i className="fab fa-css3-alt mr-2"></i>CSS</p>
                  <p className="text-muted mb-0"><i className="fab fa-js mr-2"></i>JavaScript</p>
                  <p className="text-muted mb-0"><Icon className="mr-2" icon={consoleSqlOutlined} />SQL</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 className="h4 mb-2"> Libraries/Frameworks </h3>
                  <p className="text-muted mb-0"><i className="fab fa-react mr-2"></i>React</p>
                  <p className="text-muted mb-0"><Icon className="mr-2" icon={gatsbyIcon} /> Gatsby</p>
                  <p className="text-muted mb-0"><Icon className="mr-2" icon={nextjsIcon} /> Next.js</p>
                  <p className="text-muted mb-0"><i className="fab fa-node-js mr-2"></i>Node.js</p>
                  <p className="text-muted mb-0"><Icon className="mr-2" icon={expressIcon} />Express.js</p>
                  <p className="text-muted mb-0"><Icon className="mr-2" icon={jqueryIcon} />jQuery</p>
                  <p className="text-muted mb-0"><i className="fab fa-bootstrap mr-2"></i>Bootstrap</p>
                  <p className="text-muted mb-0"><i className="fab fa-sass mr-2"></i>Sass</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5" id="tools">
                  <i className="fas fa-4x fa-tools text-primary mb-4"></i>
                  <h3 className="h4 mb-2">  Tools </h3>
                  <p className="text-muted mb-0"><i className="fab fa-github mr-2"></i>Github</p>
                  <p className="text-muted mb-0"><i className="fab fa-trello mr-2"></i>Trello</p>
                  <p className="text-muted mb-0"><Icon className="mr-2" icon={herokuIcon} />Heroku</p>
                  <p className="text-muted mb-0"><Icon className="mr-2" icon={firebaseIcon} />Firebase</p>
                  <p className="text-muted mb-0"><Icon className="mr-2" icon={postgresqlIcon} />PostgreSQL</p>
                  <p className="text-muted mb-0"><Icon className="mr-2" icon={mysqlIcon} id="mysql"/>MySQL</p>
                  <p className="text-muted mb-0">
                    <img 
                      className="mr-2"
                      src="https://res.cloudinary.com/laurameehan/image/upload/c_scale,co_rgb:6c757d,e_grayscale,h_16,w_16/v1573537737/samples/cloudinary-icon.png" 
                      alt="cloudinary icon" />Cloudinary</p>
                  <p className="text-muted mb-0">
                    <img 
                      className="mr-2" 
                      src="https://res.cloudinary.com/laurameehan/image/upload/c_scale,h_16,w_16/v1583189152/icons8-command-line-50_hig8v5.png" 
                      alt="command line icon" />Command Line</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Made with Love</h3>
                  <p className="text-muted mb-0"><Icon className="mr-2" icon={responsiveIcon} />Responsive Design</p>
                  <p className="text-muted mb-0">
                    <img 
                      className="mr-2" 
                      src="https://res.cloudinary.com/laurameehan/image/upload/v1583133133/jasmine-16_umnesr.svg" 
                      height="16" 
                      width="16" 
                      alt="jasmine testing icon" />Jasmine Testing</p>
                  <p className="text-muted mb-0"><i className="fas fa-sitemap mr-2"></i>MVC Architecture</p>
                  <p className="text-muted mb-0"><i className="fas fa-universal-access mr-2"></i>Web Accessible</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark " id="portfolio">
          <h2 className="text-center text-white mt-0"> Portfolio </h2>
            <hr className="divider light my-4"/>
              <div className="container">

                <div className="card m-4 border-0 shadow"> 
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img 
                        className="card-img h-100"
                        src="https://res.cloudinary.com/laurameehan/image/upload/v1585115417/pattern_tlysrn.png" 
                        alt="music pattern" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body bg-light">
                        <h3 className="card-title my-3"> Resonate </h3>
                        <p className="card-text text-muted text-uppercase"> React.js Music player</p>
                        <p className="mb-2">
                          <span className="mr-2 font-weight-bold"> About: </span> 
                          Resonate was my first main SPA web app that I built while undergoing my apprenticeship. It is similar to Spotify. In order to navigate 
                          between the landing page, the library page, then finally onto a specific album I implemented the React Router to help with these page transitions. 
                          It has the ability to play, pause, skip forward, skip backwards, and raise/lower volume.
                        </p>
                        <p className="card-text"><span className="mr-2 font-weight-bold"> Built with: </span> 
                          React, React Developer Tools Chrome extension for debugging, Babel for enabling JSX syntax support, 
                          React Router for client-side page transitions, Bootstrap for layout and style, and Git for version-control.
                        </p>
                        <a className="btn btn-primary card-link my-2" href="https://lmariemeehan-bloc-jams-react.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                        <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/Resonate" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card m-4 border-0 shadow">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img 
                        className="card-img h-100" 
                        src="https://res.cloudinary.com/laurameehan/image/upload/v1588021203/pattern_5_rwm2vu.png" 
                        alt="chat pattern" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body bg-light">
                        <h3 className="card-title my-3"> Hello </h3>
                        <p className="card-text text-muted text-uppercase"> React.js Chat app </p>
                        <p className="mb-2"><span className="mr-2 font-weight-bold">About: </span> 
                          This was the second SPA web app that I built while undergoing my apprenticeship.
                          Definitely more complicated than the last React project. This is a chat app that required adding Firebase in order to utilize both the user 
                          authentication feature as well as it's NoSQL database to store user messages. Upon logging in, you are able to add & delete rooms as well as add & delete messages.</p>
                        <p className="card-text"><span className="mr-2 font-weight-bold"> Built with: </span> React, React Tools Chrome extension for debugging, Babel, 
                          React Router for client-side page transitions, Bootstrap for layout and style, Git for version-control, and Firebase for the NoSQL database and user authentication.</p>
                        <a className="btn btn-primary card-link my-2" href="https://lmariemeehan-bloc-chat-react.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                        <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/Hello" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card m-4 border-0 shadow">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img 
                        className="card-img h-100" 
                        src="https://res.cloudinary.com/laurameehan/image/upload/v1588020376/pattern_4_asdvwk.png" 
                        alt="chat pattern" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body bg-light">
                        <h3 className="card-title my-3"> Memes </h3>
                        <p className="card-text text-muted text-uppercase"> React.js Meme Generator app </p>
                        <p className="mb-2"><span className="mr-2 font-weight-bold">About: </span> 
                          This was just built for fun and to help solidfy my knowlege of React. I added an api for the images that you see and set it up so that they cycle through at random. 
                          Just a little, simple, quick app but loads of fun!</p>
                        <p className="card-text"><span className="mr-2 font-weight-bold"> Built with: </span> React, Git for version-control, and CSS for style.</p>
                        <a className="btn btn-primary card-link my-2" href="https://lauras-memegenerator.netlify.app/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                        <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/meme-generator" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card m-4 border-0 shadow">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img 
                        className="card-img h-100" 
                        src="https://res.cloudinary.com/laurameehan/image/upload/v1585117001/pattern_3_forpgk.png" 
                        alt="wikipedia pattern" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body bg-light">
                        <h3 className="card-title my-3"> InQuisitive </h3>
                        <p className="card-text text-muted text-uppercase"> Node.js Wikipedia app </p>
                        <p className="card-text"><span className="mr-2 font-weight-bold">About: </span> 
                          This is a wikipedia app with the ability to create, share, and collaborate markdown wikis. Users are able to create wikis on either a 
                          public level or on a private level depending on their status. Users can upgrade to premium level thereby allowing him/her to make private wikis to share with
                          only people of their choice. This is done by making a payment through Stripe (which is an API) that I added.</p>
                        <p className="card-text"><span className="mr-2 font-weight-bold">Built with: </span> 
                          Node.js, Express.js, Morgan for debugging, Stripe API to charge users to upgrade, Sendgrid API for email responses, Passport for user authentication, 
                          Sequelize as the ORM, Jasmine for TDD testing, Markdown, bcrypt for hashed passwords, and PostgreSQL for the database.</p>
                        <a className="btn btn-primary card-link my-2" href="https://lmariemeehan-blocipedia.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                        <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/InQuisitive" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card m-4 border-0 shadow">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img 
                        className="card-img h-100" 
                        src="https://res.cloudinary.com/laurameehan/image/upload/v1585117253/pattern_2_aejfeg.png" 
                        alt="medical pattern" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body bg-light p-4">
                        <h3 className="card-title mb-4"> INRecord </h3>
                        <p className="card-text text-muted text-uppercase">Node.js INR & Medication tracking app</p>
                        <p className="card-text"><span className="mr-2 font-weight-bold">About: </span>
                          I built this app for my husband. Long story short, several years ago he needed to have a heart surgery where his aortic valve had to be replaced with a mechanical one. 
                          Because of this mechanical valve, he needs to take Coumadin for the rest of his life in order to prevent having strokes. And on a regular basis, he gets his "INR" levels checked to make sure 
                          he is within range (if he is not, then a stroke is a possibility and so his Coumadin dosage amounts would get adjusted to get him back in range). So I built this app, so he could have a visual way 
                          where he could enter and view all of his INR results in one place. I also added a place where he could keep track of all of his medications and their dosages as well a place to keep track of his doctor 
                          appointments. I also have future plans to add a section for symptoms where he could jot down what he is experiencing as well as add images if his issue is visible.</p>
                        <p className="card-text"><span className="mr-2 font-weight-bold">Built with: </span> Node.js, Express.js, Passport for user authentication, Sequelize as the ORM, Jasmine for TDD testing, 
                          bcrypt for hashed passwords, and MySQL for the database. I also plan on adding Cloudinary to store images to keep track of physical symptom changes.</p>
                        <a className="btn btn-primary card-link my-2" href="https://lmariemeehan-inr.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                        <a className="btn btn-primary card-link my-2" href="https://github.com/lmariemeehan/inr" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>   
    
              <div className="container-fluid mt-5 px-0">
                <div className="row no-gutters pt-5 mt-5">
                  <div className="col-lg-6 col-sm-6">
                    <a className="portfolio-box" href="img/portfolio/fullsize/1-resonate.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                      <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                      <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">
                          React.js Music App
                        </div>
                        <div className="project-name">
                          Resonate
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <a className="portfolio-box" href="img/portfolio/fullsize/2-hello.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                      <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                      <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">
                          React.js Chat App
                        </div>
                        <div className="project-name">
                          Hello
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                      <a className="portfolio-box" href="img/portfolio/fullsize/3-inquisitive.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                        <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                        <div className="portfolio-box-caption">
                          <div className="project-category text-white-50">
                            Node.js Wikipedia App
                          </div>
                          <div className="project-name">
                            InQuisitive
                          </div>
                        </div>
                      </a>
                    </div>
                  <div className="col-lg-6 col-sm-6">
                    <a className="portfolio-box" href="img/portfolio/fullsize/4-inrecord.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                      <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                      <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">
                          Node.js INR app
                        </div>
                        <div className="project-name">
                          INRecord
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider mt-4 mb-5"/>   
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-3 col-sm-6 ml-auto text-center mb-5 mb-lg-0">
                <i className="fab fa-github fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="https://github.com/lmariemeehan" target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div className="col-lg-3 col-sm-6 text-center mb-5">
                <i className="fab fa-linkedin fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="https://www.linkedin.com/in/laura-meehan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div className="col-lg-3 col-sm-6 mr-auto text-center mb-5">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:lmariemeehan@gmail.com">Email</a>
              </div>
              <div className="col-lg-3 col-sm-6 mr-auto text-center">
                <i className="fas fa-file fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="https://resume.creddle.io/resume/esk2ehlp0oj" target="_blank" rel="noopener noreferrer">Resume</a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
