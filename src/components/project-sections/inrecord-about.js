import React from "react"

function InrecordAbout() {
    return (
        <>
            <hr />
            <p className="m-3"><span className="mr-2 font-weight-bold">About: </span>
                I built this app for my husband. Long story short, my husband had a heart surgery several years ago in order to replace his malfunctioning aortic valve with a mechanical one. Now on a regular basis, 
                he gets his "INR" levels checked to make sure he is within a specific range (if he is not in range, then a stroke is a possibility which means his medication dosages gets adjusted accordingly to get him back in range). 
                I built this app so that he could have a visual tool where he could enter and view all of his INR results in one place. To stay organized, I added a place where he could also keep track of all of his medications and 
                their dosages as well a place to keep track of his doctor appointments.
            </p>
            <p className="m-3"><span className="mr-2 font-weight-bold">Built with: </span> 
                Node.js, Express.js, Passport, Sequelize, Jasmine, bcrypt, and MySQL.
            </p>
        </>
    )
}

export default InrecordAbout