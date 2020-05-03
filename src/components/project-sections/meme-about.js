import React from "react"

function MemeAbout (props) {
        return (
            <>
                <hr />
                <p className="m-3"><span className="mr-2 font-weight-bold">About: </span> 
                    This was just built for fun and to help solidfy my knowlege of React. I added an api for the images that you see and set it up so that they cycle through at random. 
                    Just a little, simple, quick app but loads of fun!
                </p>
                <p className="m-3"><span className="mr-2 font-weight-bold"> Built with: </span> React, API for images, and CSS for style.</p>
            </>
        )

}

export default MemeAbout