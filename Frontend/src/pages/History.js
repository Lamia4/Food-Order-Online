import React, {useState} from 'react';
import { Table, Row,Col, Container ,Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import "./History.css";
function History(props) {
   
      const [modal, setModal] = useState(false);
      const {
        buttonLabel,
        className
      } = props;
      const toggle = () => 
      {
          setModal(!modal);

         
      }
     
    return (
        <div className="history">
        <Container className="modalContainer"  style={{marginTop:"2vh",  justifyContent:"center"}} >
        <Row className=" modalRow " style={{display:"flex",justifyContent:"center"}}>
            <Col xs={12} md={10} lg={8} className="my-1 modalColumn">
            <h1 style={{margin:"25px auto", textAlign:"center"}}>Order History</h1>
                <Table className=" modalTable"  style={{width:"100%"}}    >
                    <thead>
                        <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Orders</th>
                        <th>Date</th>
                        <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark John</td>
                        <td>6</td>
                        <td>12.10.2021 10:10</td>
                        <td style={{cursor:"pointer"}}>
                        <td onClick={toggle}>View</td>
                            <Modal isOpen={modal}  >
                            <ModalHeader className="modalClassX"  toggle={toggle}>Mark John</ModalHeader>
                            <ModalBody>
                                Pizza Veggie x 3 
                            </ModalBody>
                            <ModalBody>
                                Hamburger Classic x 2
                            </ModalBody>
                            <ModalBody>
                                Cookie x 1
                            </ModalBody>
                            <ModalBody className="modalAddress">
                               <b>Address: </b> 
                                
                            </ModalBody>
                            <ModalBody>
                                 
                                Hamburger Str. 40, 01095 Berlin
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" onClick={toggle}>Close</Button>
                            </ModalFooter>
                            </Modal>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob Coffee</td>
                        <td>4</td>
                        <td>12.10.2021 10:30</td>
                        <td onClick={toggle}  style={{cursor:"pointer"}}>view</td>

                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry Valley</td>
                        <td>3</td>
                        <td>12.10.2021 12:09</td>
                        <td onClick={toggle} style={{cursor:"pointer"}}>view</td>

                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
     </Container>
     </div>  
        
        
    )
}

export default History