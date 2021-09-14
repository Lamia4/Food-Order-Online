import mongoose from "mongoose";
import bcrypt from "bcrypt";

const OrderListItemSchema = mongoose.Schema({
    foodId: {
		type: String,
		required: true,
	},
	title: {
		type: String,
	},
    description: {
		type: String,
	},
    img: {
		type: String,
	},
    price: {
		type: Number,
		default: 0,
	},
}, { _id: false });

const UserSchema = mongoose.Schema({
    name:  {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
		type: String,
		required: true
	},
    orderList: [OrderListItemSchema],
}, { versionKey: false });

const User = mongoose.model("User", UserSchema);

async function emailExist (emailP) {
	return await User.exists({ email: emailP })
}

async function addFoodToOrderList (foodId) {
	const user = await User.findById(foodId);
	if (!user) throw new Error("user not found");
	user.orderList.push({ foodId });
	return await user.save();
};

async function deleteById(id){
	return await User.findByIdAndDelete(id);
}

async function readOne (id) {
	return await User.findById(id);
};

async function updateById(id, userObject){
	return await User.findByIdAndUpdate(
		id, 
		userObject, 
		{new: true, runValidators: true}
	);
}

async function authenticate (email, password) {

	const findUser = await User.findOne({ email: email });
	
	if(!findUser) throw new Error("User not found");

	const isAuthenticated = bcrypt.compareSync(password, findUser.password);

	if(!isAuthenticated) throw new Error("password incorrect");
	
	return findUser;

};

// try {
//     authenticate();
// } catch (error) {
// 	console.log(error);
// }


async function createUser (nameP, emailP, passwordP) {
	const SALT_ROUNDS = 12;
	console.log("before hash");
	const newBcrypt = bcrypt.hashSync(passwordP, SALT_ROUNDS);
	console.log(newBcrypt);
	const user = new User({
		name: nameP,
		email: emailP,
        password: newBcrypt,
	});
	console.log("before save");
	return await user.save();
}

export default { 
    createUser, 
    addFoodToOrderList, 
    deleteById,
    readOne, 
    updateById,
	emailExist,
	authenticate 
};
