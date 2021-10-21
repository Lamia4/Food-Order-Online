async function deleteImage(imagePublicId){
    const url =   `${process.env.REACT_APP_BACKEND_SERVER}api/deletepicture`;
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