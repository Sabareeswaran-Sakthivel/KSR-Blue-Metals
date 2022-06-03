import Orders from '../../models/orders';
import connectDb from '../../utils/db'

export default async function handler(req, res) {
    await connectDb();
    if(req.method === "GET"){

            Orders.find({}).sort({"order_date": -1}).then((data)=>{
                res.status(200).json({success: true,data: data })
            }).catch((err)=>{
                res.status(500).json({success: false})
            })
    }
    if(req.method === "PUT"){
         const {id} = req.body;
         console.log(id)
         Orders.findOneAndUpdate({_id: id}, {deliverd: true}).then(()=>{
             res.status(200).json({success: true})
         })
    }
}

