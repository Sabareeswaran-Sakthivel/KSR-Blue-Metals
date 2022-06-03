import mongoose, {Schema} from 'mongoose'

const ordersSchema = new Schema({
    order_id: String,
    email: String,
    name: String,
    payment_id: String,
    payment_signature: String,
    amount: Number,
    product_type: String,
    units: Number,
    address: String,
    mobile: String,
    pincode: String,
    district: String,
    order_date: Date,
    deliverd: {
        type: Boolean,
        default: false,
    }
})

export default mongoose.models.Order || mongoose.model("Order", ordersSchema)
