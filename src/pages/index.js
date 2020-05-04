import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import About from "../components/about.js"
import Skills from "../components/skills.js"
import Contact from "../components/contact.js"
import Projects from "../components/projects.js"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

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
        <About />
        <Skills />
        <Projects />
        <section className="page-section bg-dark" id="portfolio">
          <div className="container-fluid px-0 bg-dark">
            <div className="row no-gutters d-flex justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1-meme.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      React.js Meme Generator
                    </div>
                    <div className="project-name">
                      Memes
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2-resonate.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
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
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3-hello.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
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
              <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="img/portfolio/fullsize/4-inquisitive.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                    <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
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
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/5-inrecord.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
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
        <Contact />

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
