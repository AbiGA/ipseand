import React from "react";
import './contact.css';

export class  Contact extends React.Component {
    render () {
        return(
            <div className="Ap">
                <p>Contact us</p>
                <div>
                <form action="#">
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" />


                <label>Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                <input type="submit" value="Submit" />
                </form>
                </div>
            </div>
        );
    }
}