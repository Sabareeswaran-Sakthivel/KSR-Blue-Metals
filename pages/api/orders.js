// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Razorpay from 'razorpay'
import short from 'short-uuid'

export default function handler(req, res) {
  if(req.method == "POST"){
    const {amount} = (req.body);
    const instance = new Razorpay({ key_id: 'rzp_test_QnI67kwM3hCK4O', key_secret: 'ayq50yglqZq59sgt09MNLPlL' });
    instance.orders.create({  
      amount: amount,  
      currency: "INR",  
      receipt: `receipt-${short.generate()}`,  
    }).then((response)=>{
      res.status(200).json({ data: response })
    })
  }
}
