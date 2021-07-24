import React from 'react';
import './Event.css';
import Link from 'gatsby';
import { Row,Col,Container,Button } from 'reactstrap';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Events = () => {
    return (
        <div className="eventbody p-5" id="event">
            <div data-aos="fade-up">
            <h2 style={{fontSize:'55px',color:'white',fontWeight:'bold'}}>Eve<h2 style={{fontSize:'55px',color:'#FDCA40',display:'inline-block',fontWeight:'bold'}}>nts</h2></h2>
            </div>
        <Row>
            <Col xl="6" className="box" style={{ textAlign: 'center' }}>
                    
                <img className="thumbnail image" src={require("../../images/idea.jpg")} />
                <Container className="text" style={{ paddingTop: '10vh'}}>
                <h1 style={{marginTop:'-6vh',marginBottom:'3vh',lineHeight:'5vh',color:'#FDCA40'}}>IDEATHON</h1>
                <p style={{ textAlign: 'justify', paddingLeft: '20px', paddingRight: '20px' }}>Ideathon is about curating ideas and contemplating their probable benefit to the society. It's rightly said, "A good idea becomes great when you let it out." It's an opportune moment for you to propose a rational solution to the challenges existing in the society or come forth with the best possible mix of idea and innovation, offering authentic products to the society.</p>
                <div style={{margin:"2vh"}}>
                    <Button href="https://ideathon.ecelliiitp.org" className="button">
                            {/*<FiberManualRecordIcon style={{ color: 'red', paddingRight: '4px', fontSize: '20px' }} />*/} COMING SOON
                    </Button>
                </div>    
                </Container>                
            </Col>
            <div className="col-xl-6 box">
                <img className="thumbnail image" src={require("../../images/Hack.jpg")}/>
                <Container className="text" style={{ paddingTop: '10vh' }}>
                <h1 style={{marginTop:'-6vh',marginBottom:'3vh',lineHeight:'5vh',color:'#FDCA40'}}>HACKATHON</h1>
                <p style={{ textAlign: 'justify', paddingLeft: '20px', paddingRight: '20px' }}>An inventive mind creates resourceful products inspired from the best. Designing software based products with accurate amounts of innovation, design and user-friendly techniques to solve the given problems is the gist of any Hackathon. Connect with like-minded people to combine your enthusiasm levels to come up with authentic software solutions.</p>
                <div style={{margin:"2vh"}}>
                    <Button href="https://hackathon.ecelliiitp.org/" className="button">
                                {/*<FiberManualRecordIcon style={{ color: 'red', paddingRight: '4px', fontSize: '20px' }}/> */} COMING SOON
                    </Button>            
                </div>    
                </Container>                
            </div>
            <div className="col-xl-4 box">
                <img className="thumbnail image" src={require("../../images/Product.jpg")}/>
                <Container className="text text1" style={{ paddingTop: '8vh' }}>
                <h1 style={{marginTop:'-6vh',marginBottom:'3vh',lineHeight:'5vh',color:'#FDCA40'}}>PRODUCTATHON</h1>        
                <p style={{ textAlign: 'justify', paddingLeft: '20px', paddingRight: '20px' }}>Ideas require an environment to connect before turning into viable products. Productathon is a medium through which one can pitch in these ideas regarding problem statements assigned to the tech-enthusiasts by building prototypes of their products as proofs of concept. A top-notch product ensures economical feasibility, environment sustainability and advancement in technology.</p>
                <div style={{margin:"2vh"}}>
                    <Button className="button">
                        COMING SOON            
                    </Button> 
                </div>        
                </Container>                
            </div>
            <div className="col-xl-4 box">
                <img className="thumbnail image" src={require("../../images/quiz.jpg")}/>
                <Container className="text text1" style={{ paddingTop: '8vh' }}>
                <h1 style={{marginTop:'-6vh',marginBottom:'3vh',lineHeight:'5vh',color:'#FDCA40'}}>E-QUIZ</h1>        
                <p style={{ textAlign: 'justify', paddingLeft: '20px', paddingRight: '20px' }}>Entrepreneurship is a dynamic concept. It changes as the nations develop. The millennials aiming to be the exemplar figures of tomorrow ought to keep themselves informed of the history and future of entrepreneurship as success in any domain demands awareness. Test your knowledge and responsiveness in the field of entrepreneurship through the E-Quiz.</p>
                <div style={{margin:"2vh"}}>
                    <Button className="button">
                            {/*<FiberManualRecordIcon style={{ color: 'red', paddingRight: '4px', fontSize: '20px' }} />*/}
                            EXPLORE
                    </Button> 
                </div>        
                </Container>             
            </div>
            <div className="col-xl-4 box">
                <img className="thumbnail image" src={require("../../images/Speaker.jpg")} />
                <Container className="text text1" style={{ paddingTop: '8vh' }}>
                <h1 style={{marginTop:'-6vh',marginBottom:'3vh',lineHeight:'5vh',color:'#FDCA40'}}>SPEAKER SESSION</h1>
                <p style={{ textAlign: 'justify', paddingLeft: '20px', paddingRight: '20px' }}>Hear directly from the leading high-tech entrepreneurs about how they turned their thoughts into success stories. Get energised and stimulate your entrepreneurial interests as the independent business leaders render the insider knowledge through their experience. Interact and learn from the exemplar figures as you embark your journey of being the next visionary entrepreneur.</p>
                <div style={{margin:"2vh"}}>
                    <Button className="button">
                        COMING SOON            
                    </Button> 
                </div>        
                </Container>                
            </div>
        </Row>
    </div>
    )
}

export default Events
