async function order(user, cart, price){

    const order = await fetch('http://localhost:3438/api/checkout', {
            method: 'POST',
            body: JSON.stringify({user, cart, price}),
            headers: {
            'Content-type': "application/json"
            }
            }).then(response => response.json())
            .catch(err => console.log(err));
            
    console.log(order);        
    return order;
}

export default order