import React, { Component, Fragment } from 'react';
import { Col, Container, Row ,Button,} from 'react-bootstrap';
import '../../components/TopHeader/TopHeader.css';
import { CiSearch } from "react-icons/ci";
import mainTop from '../../asset/images/bbe642_62414e50bef34ce28db1afabf55f17ec~mv2.gif';




class TopHeader extends Component {
      render() {
            return (
                  <Fragment >

                        <Container fluid className='bg' >

                <Container>
                   
                   <Row>

              <Col lg={6} md={6} sm={12}>


               <img src={ mainTop } alt="" className=' top-images w-100 mt-5' ></img>


              </Col> 


                    <Col className='Main-text' lg={6} md={6} sm={12}>

                     
               <h1 className='Top-text'>Protect all your data with strong security access</h1>
               <p className='First-text '>Ensuring maximum security</p>
               <p className=' mt-2 Top'>This is software that protects all your data, including strong security access. Use data as needed and provide security.</p>
               <Button variant="danger" className='mt-2'> <CiSearch /> Scan Your Website - Free! </Button>
                    


                   </Col>


                              </Row>

                           </Container>
                        </Container>
                        
                  </Fragment>
            );
      }
}

export default TopHeader;