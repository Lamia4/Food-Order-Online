async function uploadImage(image){
    const url = `/api/upload`;

    const result= await fetch(url,
        {
            method: "POST",
            body: image,
        })
        .then(response => response.json())
        .catch(err => console.log(err));

        return result;

}

export default uploadImage;