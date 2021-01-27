import React, { useEffect, useState } from "react"
import { Container } from 'reactstrap';
import Aos from 'aos';
import axios from "axios"
import { baseUrl } from "../../baseUrl"
import 'aos/dist/aos.css';
import './contact.css';

const Contact = () => {
    const [name, setname] = useState("")
    const [message, setmessage] = useState("")
    const [email, seteamil] = useState("")
    const [subject, setsubject] = useState("")
    useEffect(() => {
        Aos.init({ offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100 });
    }, [])
    const formsubmit = e => {
      e.preventDefault()
      axios.post(
        `${baseUrl}/formsubmit`,
        { name, email, subject, message },
      ).then((res)=>{
          alert("Your form has been submitted successful");
          console.log(res.data);
      }).catch(err=>{
          console.log(err);
      })
      setname("");
      setmessage("");
      seteamil("");
      setsubject("");
    }
    return (
      <div className="mainb">
        <h1 style={{ color: "#001427" }}>Get in</h1>
        <h1 style={{ color: "#FDCA40" }}>Touch</h1>
        <p
          style={{
            color: "rgba(0, 20, 39, 0.75)",
            marginTop: "-9px",
            marginBottom: "10vh",
          }}
        >
          Leave a message to contact our team
        </p>
        <Container className="form" data-aos="fade-up">
          <form>
            <div className="col-sm-6" style={{ display: "inline-block" }}>
              <fieldset>
                <input
                  placeholder="Name"
                  onChange={e => setname(e.target.value)}
                ></input>
                <br />
                <input
                  placeholder="Email"
                  onChange={e => seteamil(e.target.value)}
                ></input>
                <br />
                <input
                  placeholder="Subject"
                  onChange={e => setsubject(e.target.value)}
                ></input>
              </fieldset>
            </div>
            <div className="col-sm-6" style={{ display: "inline-block" }}>
              <fieldset>
                <textarea
                  row="20"
                  placeholder="Message"
                  onChange={e => setmessage(e.target.value)}
                ></textarea>
              </fieldset>
            </div>
          </form>
          <button onClick={formsubmit}>Send Message</button>
        </Container>
        <br></br>
      </div>
    )
}

export default Contact
