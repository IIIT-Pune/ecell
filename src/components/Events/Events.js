import React from 'react';
import './Event.css';
import { Row,Col } from 'reactstrap';
const Events = () => {
    return (
        <div className="eventbody p-5">
            <div data-aos="fade-up">
            <h2 style={{fontSize:'55px',color:'white',fontWeight:'bold'}}>Eve<h2 style={{fontSize:'55px',color:'#FDCA40',display:'inline-block',fontWeight:'bold'}}>nts</h2></h2>
            </div>
        <Row>
            <Col md="6" xl="6" className="box">
                    <img className="thumbnail image" src={require("../../images/quiz.jpg")}/>
                <div className="text">
                Entrepreneurship is a dynamic concept. It changes as the nations develop. The millennials aiming to be the exemplar figures of tomorrow ought to keep themselves informed of the history and future of entrepreneurship as success in any domain demands awareness. Test your knowledge and responsiveness in the field of entrepreneurship through the E-Quiz.
                </div>                
            </Col>
            <div className="col-lg-6 col-md-6 box">
                    <img className="thumbnail image" src={require("../../images/Product.jpg")}/>
                <div className="text">
                Ideas require an environment to connect before turning into viable products. Productathon is a medium through which one can pitch in these ideas regarding problem statements assigned to the tech-enthusiasts by building prototypes of their products as proofs of concept. A top-notch product ensures economical feasibility, environment sustainability and advancement in technology.

                </div>                
            </div>
            <div className="col-lg-4 col-md-6 box">
                    <img className="thumbnail image" src={require("../../images/Speaker.jpg")}/>
                <div className="text">
                Hear directly from the leading high-tech entrepreneurs about how they turned their thoughts into success stories. Get energised and stimulate your entrepreneurial interests as the independent business leaders render the insider knowledge through their experience. Interact and learn from the exemplar figures as you embark your journey of being the next visionary entrepreneur.
                </div>                
            </div>
            <div className="col-lg-4 col-md-6 box">
                    <img className="thumbnail image" src={require("../../images/Hack.jpg")}/>
                <div className="text">
                    An inventive mind creates resourceful products inspired from the best. Designing software based products with accurate amounts of innovation, design and user-friendly techniques to solve the given problems is the gist of any Hackathon. Connect with like-minded people to combine your enthusiasm levels to come up with authentic software solutions. 
                </div>             
            </div>
            <div className="col-lg-4 col-md-6 box">
                <img className="thumbnail image" src={require("../../images/idea.jpg")} />
                <div className="text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, modi veniam! Culpa, molestias corporis illum delectus numquam ipsam dolores amet.
                </div>                
            </div>
        </Row>
    </div>
    )
}

export default Events
