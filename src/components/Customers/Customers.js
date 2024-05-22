import React, { Component, Fragment } from 'react';
import '../../components/Customers/Customers.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class Customers extends Component {
       render() {
              return (
                     <Fragment>
                   
                   <Container className='main-customer' >
                  <Container className='CustomerPrice'>
                    <Row>
                        <div className='CustomerPriceHeading'>
                            <h1>Affordable plans for our customers</h1>
                            <p>Try free for 30 Days</p>
                        </div>
                    <Col className="col-md-4 mt-5">
                  <Card className="PriceCard">
                    <Card.Body>
                        <h2 className='CardHed'>1 Weak</h2>
                        <p className='CardPrice'>
                        <CountUp start={0} end={10} prefix = '$' delay={0}>

                  
            {({ countUpRef, start }) => (


      <VisibilitySensor onChange={start}>
      <span ref={countUpRef} />
      </VisibilitySensor>
      
         )}
         </CountUp>
                        </p>
                      <Card.Title className="CardTitle">Less than $5 a week</Card.Title>
                      <Card.Text className="CardTitleTex">Billed every week Cancel anytime
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="customer-card col-md-4 mt-5">
                  <Card className="PriceCard">
                    <Card.Body>
                        <h2 className='CardHed'>1 month</h2>
                        <p className='CardPrice'>
                        <CountUp start={0} end={25} prefix = '$' delay={0}>

                  
            {({ countUpRef, start }) => (
       
       
             <VisibilitySensor onChange={start}>
             <span ref={countUpRef} />
             </VisibilitySensor>
             
             )}
        </CountUp>
                        </p>

                      <Card.Title className="CardTitle">Less than $20 a week</Card.Title>
                      <Card.Text className="CardTitleTex">Billed every week Cancel anytime
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Button className='Button01' variant="danger">Get Started Now</Button>
                </Col>

                <Col className="col-md-4 mt-5">
                  <Card className="PriceCard">
                    <Card.Body>
                        <h2 className='CardHed'>1 year</h2>
                        <p className='CardPrice'>
                        <CountUp start={0} end={100} prefix = '$' delay={0}>

                  
                                    {({ countUpRef, start }) => (


                                          <VisibilitySensor onChange={start}>
                                          <span ref={countUpRef} />
                                          </VisibilitySensor>
                                          
                                    )}
                                    </CountUp>
                        </p>
                      <Card.Title className="CardTitle">Less than $50 a week</Card.Title>
                      <Card.Text className="CardTitleTex">Billed every week Cancel anytime
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              
                    </Row>
                  </Container>
                </Container>         
                     </Fragment>
              );
       }
}

export default Customers;