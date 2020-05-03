import React from "react"

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

function Skills() {
    return (
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
    )
}

export default Skills