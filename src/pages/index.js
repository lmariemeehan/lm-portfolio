import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

import { Icon, InlineIcon } from "@iconify/react"
import gatsbyIcon from "@iconify/icons-simple-icons/gatsby"
import herokuIcon from "@iconify/icons-simple-icons/heroku"
import firebaseIcon from "@iconify/icons-simple-icons/firebase"
import postgresqlIcon from "@iconify/icons-simple-icons/postgresql"

import nextjsIcon from "@iconify/icons-logos/nextjs"
import jasmineIcon from "@iconify/icons-logos/jasmine"
import expressIcon from "@iconify/icons-logos/express"
import mysqlIcon from "@iconify/icons-logos/mysql"
import cloudinaryIcon from "@iconify/icons-logos/cloudinary"

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
                 full-stack development apprenticeship program where my love for code and problem-solving intensified. Since Bloc, I've made it a 
                 point to learn something new almost everyday and to be a slightly better developer than I was yesterday.</p>

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
                  <p className="text-muted mb-0"><img src="https://res.cloudinary.com/laurameehan/image/upload/c_scale,co_rgb:6c757d,e_grayscale,h_16,w_16/v1573537737/samples/cloudinary-icon.png" className="mr-2" />Cloudinary</p>

                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Made with Love</h3>
                  <p className="text-muted mb-0"><Icon icon={responsiveIcon} className="mr-2" />Responsive Design</p>
                  <p className="text-muted mb-0"><img src="https://res.cloudinary.com/laurameehan/image/upload/v1583133133/jasmine-16_umnesr.svg" height="16" width="16" className="mr-2" />Jasmine Testing</p>
                  <p className="text-muted mb-0"><i className="fas fa-sitemap mr-2"></i>MVC Architecture</p>
                  <p className="text-muted mb-0"><i className="fas fa-universal-access mr-2"></i>Web Accessible</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="images/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                  <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                       Project Name
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">
                      Project Name
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
            <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Download Now!</a>
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
              <div className="col-lg-3 ml-auto text-center mb-5 mb-lg-0">
                <i className="fab fa-github fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="https://github.com/lmariemeehan" target="_blank">Github</a>
              </div>
              <div className="col-lg-3 text-center mb-5">
                <i class="fab fa-linkedin fa-3x mb-3 text-muted"></i>
                <a class="d-block" href="https://www.linkedin.com/in/laura-meehan/" target="_blank">LinkedIn</a>
              </div>
              <div className="col-lg-3 mr-auto text-center mb-5">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:lmariemeehan@gmail.com">Email</a>
              </div>
              <div className="col-lg-3 mr-auto text-center">
                <i className="fas fa-file fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="https://resume.creddle.io/resume/esk2ehlp0oj" target="_blank">Resume</a>
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
