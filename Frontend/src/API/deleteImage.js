async function deleteImage(imagePublicId){
    const url = "http://localhost:3438/api/deletepicture";
    console.log(imagePublicId)
    const result= await fetch(url,
        {
            method: "POST",
            body: JSON.stringify(imagePublicId),
            headers:
            {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(err => console.log(err));

        return result;

}

export default deleteImage;