async function deleteImage(imagePublicId){
    const url = "http://localhost:3438/api/deletepicture";
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(imagePublicId)
    const result= await fetch(url,
        {
            method: "POST",
            body: JSON.stringify(imagePublicId),
            headers:
            {
                'Content-Type': 'application/json',
                // 'Authorization': user.token,
            }
        })
        .then(response => response.json())
        .catch(err => console.log(err));

        return result;

}

export default deleteImage;