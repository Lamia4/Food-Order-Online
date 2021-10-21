async function uploadImage(image){
    const url = `${process.env.REACT_APP_BACKEND_SERVER}api/upload`;

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