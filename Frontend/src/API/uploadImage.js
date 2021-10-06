async function uploadImage(image){
    const url = "http://localhost:3438/api/upload";

    await fetch(url,
        {
            method: "POST",
            body: JSON.stringify(image),
            headers:
            {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(err => console.log(err));

    return null;

}

export default uploadImage;