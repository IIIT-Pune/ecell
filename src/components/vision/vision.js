import React,{useEffect} from 'react';
import {
    Card,CardBody,
    CardTitle, Row, Col, Container,
    CardSubtitle
} from 'reactstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaRegLightbulb } from "@react-icons/all-files/fa/FaRegLightbulb";
import { BiBrain } from "@react-icons/all-files/bi/BiBrain";
import { BiRupee } from "@react-icons/all-files/bi/BiRupee";
import { IoMdTrendingUp } from "@react-icons/all-files/io/IoMdTrendingUp";
import './vision.css';

const Vision = () => {
    useEffect(() => {
        Aos.init({ offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
            delay: 100 });
    }, [])
    return (
        <div className="main">
            <h1 style={{color:'white'}} data-aos="fade-up">Our</h1>
            <h1 style={{ color: '#FDCA40' }} data-aos="fade-up">Vision</h1>
            <Container className="para" data-aos="fade-up">
                We aim to create a thirst for innovation and an ecosystem where students can think, learn and formulate a business plan of their own. Our purpose stands to help the aspiring entrepreneurs weave their stories of success by becoming the powerful business leaders they believe to be.
            </Container>
            <Container fluid className="mt-4 px-5">
            <Row style={{ padding: '5px' }}>
                <Col className="p-0" md="3">
                    <Card className="card">
                    <CardSubtitle><BiBrain style={{fontSize:'20vh',margin:'20px',color:'white'}}/></CardSubtitle>
                    <CardTitle className="cardtitle">THINK</CardTitle>       
                            <CardBody style={{ textAlign:'justify'}}>Entrepreneurship calls for dynamic perspectives to rise in the world of creators. The potential to reshape one’s ideas into fully-fledged products is an indispensable step for building a startup.</CardBody>
                    </Card>
                </Col>
                <Col className="p-0" md="3">
                    <Card className="card">
                    <CardSubtitle><FaRegLightbulb style={{fontSize:'20vh',margin:'20px',color:'white'}}/></CardSubtitle>
                    <CardTitle className="cardtitle">INNOVATE</CardTitle>        
                    <CardBody style={{ textAlign:'justify'}}>Innovation is the silver lining to the cloud of thoughts. An ingenious innovation with the capacity to build better products and services with constant improvement gives an edge in the market.</CardBody>
                    </Card>
                </Col>
                <Col className="p-0" md="3">
                    <Card className="card">
                    <CardSubtitle><BiRupee style={{fontSize:'20vh',margin:'20px',color:'white'}}/></CardSubtitle>
                    <CardTitle className="cardtitle">SELL</CardTitle>        
                    <CardBody style={{ textAlign:'justify'}}>No product serves a purpose until it reaches the curated customer base. A successful entrepreneur never fails to contemplate the significance of strategic selling. One decides the face of one’s product in the market.</CardBody>
                    </Card>
                </Col>
                <Col className="p-0" md="3">
                    <Card className="card">
                    <CardSubtitle><IoMdTrendingUp style={{fontSize:'20vh',margin:'20px',color:'white'}}/></CardSubtitle>
                    <CardTitle className="cardtitle">PROSPER</CardTitle>        
                    <CardBody style={{ textAlign:'justify'}}>Once the steady growth line is visible, prosperity traces back. Thereby comes the phase of profits, increased demands and consumption, marked by the rise in one’s standard of living.</CardBody>
                    </Card>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Vision;
