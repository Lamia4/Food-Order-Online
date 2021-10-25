export async function order(userID, orderList, totalPrice){

    const user = JSON.parse(localStorage.getItem("user"));
    const order = await fetch( `/api/checkout`, {
            method: 'POST',
            body: JSON.stringify({userID, orderList, totalPrice}),
            headers: {
            'Content-type': "application/json",
            'Authorization': user.token,
            }
            }).then(response => response.json())
            .catch(err => console.log(err));     
    return order;
}


export async function getOrders(){

    const orders = await fetch(`/api/checkout`, {
            method: 'GET',
            headers:
            {
                "Content-Type": "application/json"
            }
            }).then(response => response.json())
            .catch(err => console.log(err));       
    return orders;
}
