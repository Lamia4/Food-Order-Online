async function register(name, surname, street, postalCode, city, email, password){

    const userData = await fetch(`/user/register`, {
            method: 'POST',
            body: JSON.stringify({name, surname, street, postalCode, city, email, password}),
            headers: {
            'Content-type': "application/json", 
            }
            }).then(response => response.json())
            .then(data => {
                if(data.token){
                    localStorage.setItem("user", JSON.stringify(data))
                }
            return data;
            });
    return userData;
}

export default register