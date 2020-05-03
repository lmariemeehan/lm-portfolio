import React from "react"

function About() {
    return (
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
    )
}

export default About