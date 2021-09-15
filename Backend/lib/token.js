import jwt from "jsonwebtoken";


export default { 
    createToken: function (name, email) {

    // const { name, email } = req.body;

        const user = {name, email};

        const secret = process.env.SECRET;
    
        const options = {
            algorithm: "HS256",
            expiresIn: "30s"
        };
    
        const token = jwt.sign(user, secret, options);



    return token
},

checkToken: function (token) {

    return jwt.verify(token, process.env.SECRET, { algorithm: ["HS256"]}, (error, payload) => {
        if(error) throw new Error ("invalid token");

        return payload;
    })

}
}