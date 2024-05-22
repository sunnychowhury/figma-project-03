import React, { Component, Fragment } from 'react';
import { Col, Container, Row ,Button,} from 'react-bootstrap';
import '../../components/Website/Website.css';
import mainTop from '../../asset/images/Website01.gif';

class Website extends Component {
       render() {
              return (


                     <Fragment >

                     <Container fluid className='bg' >

             <Container>
                
                <Row>

                 <Col className='Main-text mt-5' lg={6} md={6} sm={12}>

                  
            <h1 className='Top-text'>We take care of your website</h1>
            <p className=' mt-2 Top'>We secure websites by automatically finding and fixing threats. Website security software protects your data website from malicious cyber threats. </p>
           
                 

                </Col>


                       <Col lg={6} md={6} sm={12}>


                       <img src={ mainTop } alt="" className=' top-images w-100' ></img>
                       
                       
                       </Col> 


                           </Row>

                        </Container>
                     </Container>
                     
               </Fragment>
              );
       }
}

export default Website;