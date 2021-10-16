async function register(name, surname, street, postalCode, city, email, password){

    const userData = await fetch('http://localhost:3438/user/register', {
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
                console.log("data", data);
            return data;
            });
            console.log("userData", userData);
    return userData;
}

export default register