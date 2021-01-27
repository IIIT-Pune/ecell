import React from 'react';
import './Event.css';
import { Row,Col } from 'reactstrap';
const Events = () => {
    return (
        <div className="eventbody p-5">
        <h2 style={{fontSize:'55px',color:'white',fontWeight:'bold'}}>Eve<h2 style={{fontSize:'55px',color:'#FDCA40',display:'inline-block',fontWeight:'bold'}}>nts</h2></h2>
        <Row>
            <Col md="6" xl="6" className="box">
                <img className="thumbnail image" src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450"/>
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores sequi velit quis doloremque ad est nisi laudantium quod? Architecto.
                </div>                
            </Col>
            <div className="col-lg-6 col-md-6 box">
                <img className="thumbnail image" src="https://images.unsplash.com/photo-1435771112039-1e5b2bcad966?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450"/>
                <div className="text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis harum molestias eum esse quis magnam corporis aut repellat maiores quidem.
                </div>                
            </div>
            <div className="col-lg-4 col-md-6 box">
                <img className="thumbnail image" src="https://images.unsplash.com/photo-1435771112039-1e5b2bcad966?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450"/>
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptas minus adipisci necessitatibus. Distinctio amet facere facilis sit fugit. Expedita?
                </div>                
            </div>
            <div className="col-lg-4 col-md-6 box">
                <img className="thumbnail image" src="https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450"/>
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut consectetur dolorum ratione, odio aliquam facilis! Nobis hic ipsa earum?
                </div>             
            </div>
            <div className="col-lg-4 col-md-6 box">
                <img className="thumbnail image" src="https://images.unsplash.com/photo-1439396087961-98bc12c21176?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450" />
                <div className="text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, modi veniam! Culpa, molestias corporis illum delectus numquam ipsam dolores amet.
                </div>                
            </div>
        </Row>
    </div>
    )
}

export default Events
