export async function postProduct(product) {
    const url = `${process.env.REACT_APP_BACKEND_SERVER}api/products`;
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
    const url = `${process.env.REACT_APP_BACKEND_SERVER}api/products/${id}`
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
        })
        .catch(err => console.log(err));
    return products;
}

export async function editProduct(id, title,  price, description, image, category){
    const url =`${process.env.REACT_APP_BACKEND_SERVER}api/products/${id}`
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
    return product;
}