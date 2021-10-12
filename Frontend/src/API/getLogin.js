
async function getLogin(email,password){

    const userData = await fetch('http://localhost:3438/user/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
            'Content-type': "application/json", 
            }
            }).then(response => response.json())
            .then(data => {
                if(data.token && data.role === 0){
                    localStorage.setItem("user", JSON.stringify(data))
                }
                console.log("data", data);
            return data;
            });
            console.log("userData", userData);
    return userData;
}

export default getLogin

//1633426610
//1633431610
      //5000

      //token müsste so umgewandelt werden, dass man die expires zahl sehen kann und mit Date.now(millisekunden) ein vergleich aufstellen kann
      //atob