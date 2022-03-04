import styles from "./Input.module.css";
import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';


// This is the basic form component - used by the donation and login screen
export default function Input(props) {

  // State declarations
  const inputType = props.secondaryInputType;
  const [buttonInactive, setButtonInactive] = useState(true);

  const [sent, setSent] = useState(false);

  const [name, setName] = useState("");
  const [fromMail, setFromMail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
		e.preventDefault();    


    console.log("Message: " + message);

    emailjs.send("service_37c6x5o","template_g0eoxga",{
      html_message: message,
      from_name: name,
      from_email: fromMail,
      }, "Y1OxASJ9-5PSR5czz");

      setSent(true);

	  }

// Output JSX
const get_message = function(e) {
  var msg = e.target.value;
  var setMessage_boom = msg + "\nMy email is: "  + fromMail;
  setMessage(setMessage_boom);
}

const get_email = function(e) {
  var mail = e.target.value;
  setFromMail(mail)
}

const get_name = function(e) {
  var name = e.target.value;
  setName(name)
}


const form = (
  <form className={styles.formBox} onSubmit={sendEmail}>

  <div>
    <h2>Send us a message!</h2>
  </div>

  <div className={styles.inputArea}>
    <label >
      Name:
      <input className={styles.input} type="text" name="from_name" placeholder="John Smith" onChange={get_name}/>
    </label>
  </div>

  <div className={styles.inputArea}>
    <label>
      Email:
      <input className={styles.input} type="email" name="html_email" placeholder="example@example.com" onChange={get_email}/>
    </label>
  </div>
  
  <div className={styles.inputArea}>
    <label>
      Message:
      <textarea className={styles.messageBox} name="html_message" placeholder="Enter your query here..." onChange={get_message}/>
    </label>
  </div>


  <input type="submit" value="Submit" className={styles.button}/>

  </form>
)

const sentJSX = (
  <div className={styles.formBox} >
    <h1>Form Sent</h1>
  </div>
)

  var toReturn = form;

  if (sent === true) toReturn = sentJSX;

  return (
    (toReturn)
  );
}
