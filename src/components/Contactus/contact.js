import React,{useEffect} from 'react';
import { Container } from 'reactstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './contact.css';

const Contact = () => {
    useEffect(() => {
        Aos.init({ offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100 });
    }, [])
    return (
        <div className="mainb">
            <h1 style={{ color: '#001427' }}>Get in</h1>
            <h1 style={{ color: '#FDCA40' }}>Touch</h1>
            <p style={{ color: 'rgba(0, 20, 39, 0.75)', marginTop: '-9px',marginBottom:'10vh' }}>Leave a message to contact our team</p>
            <Container className="form" data-aos="fade-up">
                <form>
                <div className="col-sm-6" style={{ display:'inline-block'}}>
                    <fieldset>
                        <input placeholder="Name"></input>
                        <br />
                        <input placeholder="Email"></input>
                        <br />
                        <input placeholder="Subject"></input>
                    </fieldset>
                </div>
                <div className="col-sm-6" style={{ display:'inline-block'}}>
                    <fieldset>
                        <textarea row="20" placeholder="Message"></textarea>
                    </fieldset>
                </div>
                </form>
                <button>Send Message</button>
            </Container>
            <br></br>
        </div>
    )
}

export default Contact
