import React, {useState, useEffect} from 'react';
import { Table, Row,Col, Container ,Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import "./History.css";
import {getOrders} from "../API/order.js";

function History(props) {
    const [allOrders, setAllOrders] = useState([]);
    const [orderLength, setOrderLength] = useState(0)
    const [name, setName] = useState("");
    const [orderQuantity, setOrderQuantity] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [modal, setModal] = useState(false);
    const[year, setYear] = useState(0);
    const[month, setMonth] = useState(0);
    const[date, setDate] = useState(0);
    const[oneOrder, setOneOrder] =useState("")

    const {
        buttonLabel,
        className
      } = props;
      const toggle = () => 
      {
          setModal(!modal);  
      }

  
    useEffect(() => {
    ordersData()
    }, [])

    const ordersData =  () => {
         getOrders()
         .then(orders =>{
             setAllOrders(orders);
             setOrderLength(orders.length);
             setOrderDate(orders[0].createdAt)
            setOrderQuantity(orders[0].orderList)
            
         })
    }
    // console.log(orderDate);

console.log(allOrders)
// console.log(listQuantity);

  
    // const newDate = new Date(orderDate);
    // const getOrderDate = newDate.getDate() + "." + (newDate.getMonth()+1) + "." + newDate.getFullYear() + " " + newDate.getHours()+ ":" + newDate.getMinutes();
    // console.log(getOrderDate);
        
    return (
        <div className="history">
        <Container className="modalContainer"  style={{marginTop:"2vh",  justifyContent:"center"}} >
        <Row className=" modalRow " style={{display:"flex",justifyContent:"center"}}>
            <Col xs={12} md={10} lg={8} className="my-1 modalColumn">
            <h1 style={{margin:"35px auto 0", textAlign:"center"}}>Order History</h1>
            <h4 style={{margin:"25px auto ", textAlign:"center"}}> You have {orderLength} Orders</h4>
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
                  
            {
                allOrders.map((order, i)=>(
                    <tbody>
                        <tr>
                        <th scope="row">{i + 1}</th>
                        <td> {order.userID.name[0].toUpperCase()+order.userID.name.substring(1) }</td>
                        <td>{order.orderList.reduce((first,item)=>(
                            first +(item.quantity)
                        ),0)}</td>
                        <td>
                        {new Date(order.createdAt).getDate() + "." + (new Date(order.createdAt).getMonth()+1) + "." + new Date(order.createdAt).getFullYear() + " " + new Date(order.createdAt).getHours()+ ":" + new Date(order.createdAt).getMinutes() }
                        </td>
                        <td style={{cursor:"pointer"}} onClick={toggle}>View
                            <Modal isOpen={modal}  >
                            <ModalHeader className="modalClassX"  toggle={toggle}>{order.userID.name[0].toUpperCase()+order.userID.name.substring(1) }</ModalHeader>
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
                        
                     </tbody>
                ))
            } 
                </Table>
            </Col>
        </Row>
     </Container>
     </div>  
        
        
    )
}

export default History