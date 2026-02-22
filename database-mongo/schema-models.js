import mongoose from "mongoose";


//ref relates 2 a property of a model to another model
//used with .populate()
//when we use .populate() we get that complete instead of just UserId here 
// I will get the complete user if I use .populate()
const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true, ref: 'user'},
    items: [{
        product: {type: String, required: true, ref: 'product'},
        quantity: {type: Number, required: true}
    }],
    amount: {type: Number, required: true},
    address: {type: String, required: true, ref: 'address'},
    status: {type: String, default: 'Order Placed'},
    paymentType: {type: String, required: true},
    isPaid: {type: Boolean, required: true, default: false},
},{ timestamps: true })


//this line is important 
//if a model exists then mongoose.model.order then it will return that model only 
//otherwise it will clreate a new model using mongoose.model('order', order) 
// using that orderSchema

//and in JS if the first condition is true in || (OR) then it returns that and stops
//doesn't go to the 2nd condition 

const Order = mongoose.models.order || mongoose.model('order', orderSchema)

export default Order

//A good analogy would be that models are like classes we don't need to make models again and again
//if a model is made --> mongoose.model('model-name', follow-this-schema)
//then no need to create it again and again 

//example of a schema I made

