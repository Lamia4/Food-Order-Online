export async function getCategories(){
    const url = "http://localhost:3438/api/category";
    let categories = [];

    categories = await  fetch(url,
        {
            method: "GET",
            headers:
            {
                "Content-Type": "application/json"
            }
        })
        .then(response =>{
            return response.json();
        })
        .catch((error)=>{
            console.log(error);
        })
    return categories;
}



export async function postCategory(categoryInfo){
    const url = "http://localhost:3438/api/category";

    const newCategory= await fetch(url,
        {
            method: "POST",
            body: JSON.stringify(categoryInfo),
            headers:
            {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .catch(err => console.log(err));
        console.log("postcategory is here", newCategory)
    return newCategory;
}

export async function deleteCategory(id){
    const url = `http://localhost:3438/api/category/${id}`;

    let category = await fetch(url, {
            method: "DELETE",
        })
        .then(function (response) {
            response.json()
            console.log(response)
        })
        .catch(err => console.log(err));
    return category;
}

export async function editCategory(id, name, image){
    const url =`http://localhost:3438/api/category/${id}`
    const category = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({name, image}),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        })
        .then(function (response) {
            response.json()
        })
        .catch(err => console.log(err));
        console.log("fetchCategory", category);
    return category;
}