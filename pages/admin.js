import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, {useEffect, useState } from 'react'



function Admin() {

    const [isLogged, setIsLogged] = useState(false)
    const [password, setPassword] = useState("")
    const [adminData, setAdminData] = useState([])
    const[prices, setPrices] = useState({})
    const[pricesKeys, setPricesKeys] = useState([])
    const [newPrice, setNewPrice] = useState({})


    useEffect(()=>{
      if(isLogged){
          fetchDetails()
          priceDetails()
      }
    },[isLogged])


    const fetchDetails = async()=>{
       const response = await fetch("https://ksrbluemetals.vercel.app/api/viewOrders");
       const data = await response.json()
       console.log(data)
       if(data.success){
          setAdminData(data.data)
       }  
    }

    const priceDetails = async()=>{
        const response1 = await fetch("https://ksrbluemetals.vercel.app/api/prices")
        const data1 = await response1.json();
        setPrices(data1.data[0])
        setPricesKeys(Object.keys(data1.data[0]))
    }

    const deliveryHandller = async(id)=>{
        const res = await fetch("https://ksrbluemetals.vercel.app/api/viewOrders", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
            })
        })
        const data = await res.json();
        fetchDetails()
    }
    

    const handlePassword = ()=>{
        if(password === "ksr6768"){
            setIsLogged(true)
        }else{
            window.location.href = "/"
        }
    }

    const updateHandller = async(data)=>{
        console.log(newPrice, data)
        console.log(newPrice[data])
        const res = await fetch("https://ksrbluemetals.vercel.app/api/prices", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: prices["_id"],
                amount: parseInt(newPrice[data]),
                product: data,
            })
        })
        priceDetails()
        setNewPrice({})
    }

    if(isLogged){
        return(
            <div style={{padding: "20px"}}>
                <h1>Our Orders</h1>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                               <TableCell>Customer Name</TableCell>
                               <TableCell>Mobile Number</TableCell>
                               <TableCell>Product Type</TableCell>
                               <TableCell>Units</TableCell>
                               <TableCell>Amount</TableCell>
                               <TableCell>Address</TableCell>
                               <TableCell>Payment Id</TableCell>
                               <TableCell>Date</TableCell>
                               <TableCell>Delivered</TableCell>
                               <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            adminData.map((data, index)=>{
                             return(
                                <TableRow key={index}>
                                      <TableCell align="left">{data.name}</TableCell>
                                      <TableCell align="left">{data.mobile}</TableCell>
                                      <TableCell align="left">{data.product_type}</TableCell>
                                      <TableCell align="left">{data.units}</TableCell>
                                      <TableCell align="left">{data.amount}</TableCell>
                                      <TableCell align="left">{data.address}</TableCell>
                                      <TableCell align="left">{data.payment_id}</TableCell>
                                      <TableCell align="left">{new Date(data.order_date).toLocaleDateString()}</TableCell>
                                      <TableCell align="left">{data.deliverd ? "✓" : "✘"}</TableCell>
                                      <TableCell><Button disabled={data.deliverd} onClick={() => deliveryHandller(data._id)} variant="contained">deliver</Button></TableCell>
                                </TableRow>
                            )
                    })
                }
                        </TableBody>
                    </Table>
                </TableContainer>
               <br />
               <h1>Price Editor</h1>
               <br />
               <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                               <TableCell>Product Name</TableCell>
                               <TableCell>Current Price</TableCell>
                               <TableCell>New Price</TableCell>
                               <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            pricesKeys.map((data, index)=>{
                            if(data !== "_id" && data!== "__v"){
                             return(
                                <TableRow key={index}>
                                      <TableCell align="left">{data.toUpperCase()}</TableCell>
                                      <TableCell align="left">Rs. {prices[data]} / unit</TableCell>
                                      <TableCell align="left"><TextField type={"number"} value={newPrice[data] !== undefined ? newPrice[data] : ""}  placeholder="1500" onChange={(e) => setNewPrice((prev) => {
                                          const prices = {...prev}
                                          prices[data] = e.target.value;
                                          return prices
                                        })
                                       } /></TableCell>
                                      <TableCell><Button onClick={() => updateHandller(data)} variant="contained">Update Price</Button></TableCell>
                                </TableRow>
                             )
                             }
                    })
                }
                        </TableBody>
                    </Table>
                    </TableContainer>

            </div>
        )
    }else{
        return(
        <Dialog open={!isLogged}>
            <DialogTitle>Enter Password To Access</DialogTitle>
            <DialogContent>
                <TextField type={"password"} placeholder="Enter Your Password" fullWidth autoFocus variant='standard' onChange={(e) => setPassword(e.target.value)} value={password} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handlePassword}>Enter To Admin Panel</Button>
            </DialogActions>
        </Dialog>)
    }
}

export default Admin