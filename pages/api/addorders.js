import Orders from '../../models/orders';
import connectDb from '../../utils/db'

export default async function handler(req, res) {
    await connectDb();
    if(req.method === "POST"){
        const order = new Orders(req.body)
        await order.save()
        res.status(200).json({success: true})
    }
}
