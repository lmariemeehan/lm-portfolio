import React from "react"

function InquisitiveAbout() {
    return (
        <>
            <hr />
            <p className="m-3"><span className="mr-2 font-weight-bold"> About: </span> 
                This is a wikipedia app with the ability to create, share, and collaborate markdown wikis. Users are able to create wikis on either a 
                public level or on a private level depending on their status. Users can upgrade to premium level thereby allowing him/her to make private wikis to share with
                only people of their choice. This is done by making a payment through Stripe (which is an API) that I added.
            </p>
            <p className="m-3"><span className="mr-2 font-weight-bold"> Built with: </span> 
                Node.js, Express.js, Morgan, Stripe API, Sendgrid API, Passport, Sequelize, Jasmine, Markdown, bcrypt, and PostgreSQL.
            </p>
        </>
    )
}

export default InquisitiveAbout