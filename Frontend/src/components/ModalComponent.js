import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function ModalComponent({orderDetails, toggle, setOrderDetails}) {

    const handleClose = () => {
        setOrderDetails(null)
    }

    return (
        <>
            <Modal isOpen={orderDetails}  >
                            <ModalHeader className="modalClassX"  toggle={()=>toggle(orderDetails)}>{orderDetails.userID.name[0].toUpperCase()+orderDetails.userID.name.substring(1) + " " + orderDetails.userID.surname[0].toUpperCase()+orderDetails.userID.surname.substring(1) }</ModalHeader>
                            {orderDetails.orderList.map((item,i)=>(
                              
                                <ModalBody key={i}>
                                 { (item.productId.title.toUpperCase()) + " x " + (item.quantity)}
                            </ModalBody>
                            ))}
                            <ModalBody className="modalAddress">
                               <b>Total price: </b> 
                                
                            </ModalBody>
                            <ModalBody className="modalAddress">
                               {orderDetails.totalPrice} €
                                
                            </ModalBody>
                            <ModalBody className="modalAddress">
                               <b>Address: </b> 
                                
                            </ModalBody>
                            <ModalBody>
                                 
                                {orderDetails.userID.street}, {orderDetails.userID.postalCode} {orderDetails.userID.city}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" onClick={handleClose}>Close</Button>
                            </ModalFooter>
                            </Modal>
        </>
    )
}

export default ModalComponent
