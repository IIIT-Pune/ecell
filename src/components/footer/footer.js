import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import './footer.css';

const Footer = () => {
    return (
        <div className="foot">
            <Container fluid style={{textAlign:'center'}}>
            <Row className="leftone">
                <Col className="m-2 col-xl-2">
                    <img src="https://raw.githubusercontent.com/satty26/ideathon/main/images/cellt.png" style={{ height: '102px', width: '200px',marginBottom:'2px' }}></img>
                    <br/>
                    <a href="#" target="_blank" className="icon mt-0"><FacebookIcon style={{fontSize: '30px',color:"#FDCA40"}}/></a>
                    <a href="#" target="_blank" className="icon mt-0 pl-2 pb-2"><InstagramIcon style={{fontSize:'30px',color:"#FDCA40"}} /></a>
                    <a href="#" target="_blank" className="icon pl-2 pb-2"><LinkedInIcon style={{fontSize: '30px',color:"#FDCA40"}} /></a>
                </Col>
                <Col className="col-xl-5 mt-4 ml-5" style={{textAlign:'left'}}>
                        <div>
                        <RoomIcon className="mr-2" style={{fontSize: '5vh',display:'inline-block',verticalAlign:'top' }} />
                        <p style={{display: 'inline-block',fontSize:'16px',color:'white' }}>
                            E-cell IIIT Pune <br/> Near Bopdev Ghat,Yewalewadi,Pune-411048
                        </p>
                    </div>
                    <div>
                        <MailIcon className="mr-2" style={{fontSize: '5vh',display:'inline-block',verticalAlign:'top' }} />
                        <p style={{display: 'inline-block',fontSize:'16px' }}>
                        <a href="mailto:ecell@iiitp.ac.in" style={{textDecoration:'none',color:'white'}}>ecell@iiitp.ac.in</a>
                        </p>
                    </div>    
                </Col>
                <Col className="col-xl-4 mt-3 pr-4">
                    <p style={{color:'white',fontSize:'22px',fontWeight: 'bolder'}}>About E-cell</p>
                    <p style={{fontSize:'16px',fontWeight:'lighter',justifyContent:'space-between'}}>E-Cell IIIT Pune is committed to provide assistance to the budding and promising entrepreneurs to become the future leaders of the country.</p>
                </Col>
                </Row>
                <p style={{ color: '#FDCA40', fontSize:'18px',fontWeight:'bolder',marginBottom:'0px'}}>E-cell IIIT PUNE &copy; 2021 </p>
            </Container>
        </div>
    )
}

export default Footer
