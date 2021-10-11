export async function postProduct(product) {
    const url = "http://localhost:3438/api/products";

    await fetch(url, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(err => console.log(err));

    return null;
}

export async function deleteProduct(id) {
    const url = `http://localhost:3438/api/products/${id}`
    let products = null;
    products = await fetch(url, {
            method: "DELETE",
        })
        .then(function (response) {
            response.json()
            console.log(response)
        })
        .catch(err => console.log(err));
    return products;
}

export async function editProduct(id,title,description,image,price, category){
    const url =`http://localhost:3438/api/products/${id}`
    const product = await fetch(url, {
            method: "PUT",
            body: title,description,image,price,category
        })
        .then(function (response) {
            response.json()
            console.log(response)
        })
        .catch(err => console.log(err));
    return product;
}