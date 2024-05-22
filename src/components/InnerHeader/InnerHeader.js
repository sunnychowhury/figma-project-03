import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import icon from '../../asset/images/Innericon1.png';
import icons from '../../asset/images/Innericon02.png';
import iconn from '../../asset/images/Innericon03.png';

class InnerHeader extends Component {
     render() {
          return (
               <Fragment >

               <Container fluid className='Inner-Main mt-5'>

               <Container  className='Main-color'>
                     <Row >
                          

                           <Col lg={4} md={6} sm={12} className='mt-5'>
                                <img src={ icon } alt="" className='' ></img> 
                                 <h3 className='mt-4'> Solve Problems Real Time</h3>
                                 <p className='Call'>Real-time problem solving is not just about time, it's about time. This allows you to solve problems within a specified time problem has a solution.</p>
                           </Col>

                           <Col lg={4} md={6} sm={12} className='mt-5'>
                                 <img src={ icons } alt="" className='' ></img>
                                 <h3 className='mt-4'>Secured & Safe Payments</h3>
                                 <p className='Call'>By and large, credit cards are easily the most secure and safe payment method to use when you shop online. credit cards most secure.</p>

                           </Col>

                           <Col lg={4} md={6} sm={12} className='mt-5'>
                                 <img src={ iconn } alt="" className='' ></img> 
                                 <h3 className='mt-4'>24//7 Customer Support</h3>
                                 <p className='Call'>The biggest benefit of offering 24/7 support is that you provide a more convenient service for your customers providing clock support.</p>

                           </Col>

                     </Row>
               </Container>
                  </Container>
               
         </Fragment>
          );
     }
}

export default InnerHeader;