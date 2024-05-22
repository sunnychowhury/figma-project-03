import React, { Component, Fragment } from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import review from '../../asset/images/Star.png';
import review2 from '../../asset/images/Star (1).png';
import review3 from '../../asset/images/slack-2.png';

import '../../components/Review/Review.css';


class Review extends Component {
     render() {
          return (
               <Fragment  >

                              <div className="sp">

                              <Container fluid className='Main-Review p-0'>
                              <Container >
                              <Row className='color-bg' >
                              <div>
                                    <h1 className='good-xp text-center mt-5'>Trusted by 1200+ world class businesses</h1>
                                    </div>
                                    <Col lg={6} md={6} sm={12}>

                                          <h2 className=' Site-image-1 mt-5 '><img src={ review } alt="" className='' ></img>  </h2>

                                          <p className='review-text-1'>“I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage."</p>


                                          
                                          <h2 className='Site-image-2 mt-5 '><img src={ review3 } alt="" className='' ></img>  </h2>
                                          

                                    </Col>

                                    <Col lg={6} md={6} sm={12}>

                                    <h2 className='Site-image-2 mt-5 '><img src={ review2 } alt="" className='' ></img>  </h2>
                                    <p className='review-text-2'>“I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage."</p>
                                          
                                          <h2 className='Site-text-2 mt-5 '>  trivago</h2>
                                          
                                          
                                    </Col>
                              </Row>
                              </Container>
                        </Container>
                        </div>
                    
               </Fragment>
          );
     }
}

export default Review;