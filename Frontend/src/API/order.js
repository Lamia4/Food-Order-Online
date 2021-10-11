async function order(userID, orderList, totalPrice){

    const user = JSON.parse(localStorage.getItem("user"));
    console.log("localstorage test", user);
    const order = await fetch('http://localhost:3438/api/checkout', {
            method: 'POST',
            body: JSON.stringify({userID, orderList, totalPrice}),
            headers: {
            'Content-type': "application/json",
            'Authorization': user.token,
            }
            }).then(response => response.json())
            .catch(err => console.log(err));
            
    console.log(order);        
    return order;
}

export default order