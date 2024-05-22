import React, { Component, Fragment } from 'react';
import { Col, Container, Row ,Button,} from 'react-bootstrap';
import mainTop from '../../asset/images/49bcfd78364175.5ca3009cb692f.gif';
import '../../components/DataSide/DataSide.css';


class DataSide extends Component {
       render() {
              return (
                     <Fragment>

                  <Container fluid className='bg' >

              <Container>
   
                 <Row>

                  <Col lg={6} md={6} sm={12}>


                <img src={ mainTop } alt="" className=' top-images w-100' ></img>


                 </Col> 


               <Col className='Main-text' lg={6} md={6} sm={12}>

     
                   <h1 className='Top-text'>Data exchange is the most secure</h1>
                  
                   <p className=' mt-2 Top'>Data security refers to the process of protecting all data from unauthorized access and data corruption throughout its lifecycle.</p>
                  


                 </Col>


              </Row>

           </Container>
        </Container>
                            
                     </Fragment>
              );
       }
}

export default DataSide;