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
                <h2 className="text-white mt-0">About</h2>
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
                  <p className="text-muted mb-0"><Icon icon={consoleSqlOutlined} className="mr-2" />SQL</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 className="h4 mb-2"> Libraries/Frameworks </h3>
                  <p className="text-muted mb-0"><i className="fab fa-react mr-2"></i>React</p>
                  <p className="text-muted mb-0"><Icon icon={gatsbyIcon} className="mr-2"/> Gatsby</p>
                  <p className="text-muted mb-0"><Icon icon={nextjsIcon} className="mr-2"/> Next.js</p>
                  <p className="text-muted mb-0"><i className="fab fa-node-js mr-2"></i>Node.js</p>
                  <p className="text-muted mb-0"><Icon icon={expressIcon} className="mr-2" />Express.js</p>
                  <p className="text-muted mb-0"><Icon icon={jqueryIcon} className="mr-2" />jQuery</p>
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
                  <p className="text-muted mb-0"><Icon icon={herokuIcon} className="mr-2"/>Heroku</p>
                  <p className="text-muted mb-0"><Icon icon={firebaseIcon} className="mr-2"/>Firebase</p>
                  <p className="text-muted mb-0"><Icon icon={postgresqlIcon} className="mr-2"/>PostgreSQL</p>
                  <p className="text-muted mb-0"><Icon icon={mysqlIcon} className="mr-2" id="mysql"/>MySQL</p>
                  <p className="text-muted mb-0"><img src="https://res.cloudinary.com/laurameehan/image/upload/c_scale,co_rgb:6c757d,e_grayscale,h_16,w_16/v1573537737/samples/cloudinary-icon.png" className="mr-2" alt="cloudinary icon" />Cloudinary</p>
                  <p className="text-muted mb-0"><img src="https://res.cloudinary.com/laurameehan/image/upload/c_scale,h_16,w_16/v1583189152/icons8-command-line-50_hig8v5.png" className="mr-2" alt="command line icon" />Command Line</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Made with Love</h3>
                  <p className="text-muted mb-0"><Icon icon={responsiveIcon} className="mr-2" />Responsive Design</p>
                  <p className="text-muted mb-0"><img src="https://res.cloudinary.com/laurameehan/image/upload/v1583133133/jasmine-16_umnesr.svg" height="16" width="16" className="mr-2" alt="jasmine testing icon" />Jasmine Testing</p>
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
              <div className="container px-0">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="card bg-light border-0 shadow">
                      <img src="https://res.cloudinary.com/laurameehan/image/upload/v1585115417/pattern_tlysrn.png" className="card-img-top" alt="music pattern" />
                        <div className="card-body text-center p-4">
                          <h4 className="card-title mb-4"> Resonate </h4>
                          <p className="card-text text-muted pb-3"> React.js Music player</p>
                          <p className="card-text pb-4">Built with: React, React Developer Tools Chrome extension for debugging, Babel for enabling JSX syntax support, 
                            React Router for client-side page transitions, Bootstrap for layout and style, and Git for version-control.</p>
                          <a href="https://lmariemeehan-bloc-jams-react.herokuapp.com/" className="btn btn-primary card-link my-2" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                          <a href="https://github.com/lmariemeehan/Resonate" className="btn btn-primary card-link my-2" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                        </div>
                      </div>
               
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="card bg-light border-0 shadow">
                      <img src="https://res.cloudinary.com/laurameehan/image/upload/v1585116060/pattern_1_puyyyy.png" className="card-img-top" alt="chat pattern" />
                      <div className="card-body text-center p-4">
                        <h4 className="card-title mb-4"> Hello </h4>
                        <p className="card-text text-muted pb-3"> React.js Chat app </p>
                        <p className="card-text">Built with: React, React Developer Tools Chrome extension for debugging, Babel for enabling JSX syntax, 
                          React Router for client-side page transitions, Bootstrap for layout and style, Git for version-control, and Firebase for the NoSQL database and user authentication.</p>
                        <a href="https://lmariemeehan-bloc-chat-react.herokuapp.com/" className="btn btn-primary card-link my-2" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                        <a href="https://github.com/lmariemeehan/Hello" className="btn btn-primary card-link my-2" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-6 col-sm-6">
                    <div className="card bg-light border-0 shadow">
                      <img src="https://res.cloudinary.com/laurameehan/image/upload/v1585117001/pattern_3_forpgk.png" className="card-img-top" alt="wikipedia pattern" />
                      <div className="card-body text-center p-4">
                        <h4 className="card-title mb-4"> InQuisitive </h4>
                        <p className="card-text text-muted pb-3"> Node.js Wikipedia app </p>
                        <p className="card-text">Built with Node.js, Express.js, Morgan for debugging, Stripe API to charge users to upgrade, Sendgrid API for email responses, Passport for user authentication, Sequelize as the ORM, Jasmine for TDD testing, Markdown, bcrypt for hashed passwords, and PostgreSQL for the database.</p>
                        <a href="https://lmariemeehan-blocipedia.herokuapp.com/" className="btn btn-primary card-link my-2" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                        <a href="https://github.com/lmariemeehan/InQuisitive" className="btn btn-primary card-link my-2" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-light border-0 shadow">
                      <img src="https://res.cloudinary.com/laurameehan/image/upload/v1585117253/pattern_2_aejfeg.png" className="card-img-top" alt="medical pattern" />
                      <div className="card-body text-center p-4">
                        <h4 className="card-title mb-4"> INRecord </h4>
                        <p className="card-text text-muted pb-3">Node.js INR & Medication tracking app</p>
                        <p className="card-text">Built with Node.js, Express.js, Passport for user authentication, Sequelize as the ORM, Jasmine for TDD testing, bcrypt for hashed passwords, and MySQL for the database. I also plan on adding Cloudinary to store images to keep track of physical symptom changes.</p>
                        <a href="https://lmariemeehan-inr.herokuapp.com/" className="btn btn-primary card-link my-2" role="button" target="_blank" rel="noopener noreferrer">See it live</a>
                        <a href="https://github.com/lmariemeehan/inr" className="btn btn-primary card-link my-2" role="button" target="_blank" rel="noopener noreferrer">See the code</a>
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
