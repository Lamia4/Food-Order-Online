async function getCategories(){
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
        });
    return categories;
}

export default getCategories;