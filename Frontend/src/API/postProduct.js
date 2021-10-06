async function postProduct(product){
    const url = "http://localhost:3438/api/products";

    await fetch(url,
        {
            method: "POST",
            body: JSON.stringify(product),
            headers:
            {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(err => console.log(err));

    return null;

}

export default postProduct;