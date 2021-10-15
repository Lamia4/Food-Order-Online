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

export async function deleteProduct(id, userId) {
    const user = {userId: userId}
    const url = `http://localhost:3438/api/products/${id}`
    let products = null;
    products = await fetch(url, {
            method: "DELETE",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            response.json()
            console.log(response)
        })
        .catch(err => console.log(err));
    return products;
}

export async function editProduct(id, title,  price, description, image, category){
    console.log("editProduct from fetch");
    const url =`http://localhost:3438/api/products/${id}`
    const product = await fetch(url, {
            method: "PUT",
            body: JSON.stringify({title, price, description, image, category}),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(err => console.log(err));
        console.log("fetchProduct", product);
    return product;
}