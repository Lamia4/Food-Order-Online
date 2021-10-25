
async function getLogin(email,password){

    const userData = await fetch(`http://localhost:3438/user/login`, {
            method: 'POST',
            body: JSON.stringify({email, password}),
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

export default getLogin

