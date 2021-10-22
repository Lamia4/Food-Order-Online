async function getSearch(searchValue, category, sort){
    const url = `http://localhost:3438/api/products?${category}&title[regex]=${searchValue}&${sort}`;
    let products = [];
    products = await fetch(url,
        {
            method: "GET",
            headers:
            {
                "Content-Type": "application/json"
            }
        })
    .then(response => response.json())
    .catch((error)=>{
        console.log(error);
    });
    return products;
}
export default getSearch;