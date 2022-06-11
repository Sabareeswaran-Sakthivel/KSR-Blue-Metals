import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import styles from "../styles/Shop.module.css";

const prices = {
  msand: 1000,
  psand: 100,
};

function Shop() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [unit, setUnit] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [pin, setPin] = useState("");
  let rzp1;
  const [prices, setPrices] = useState({});
  const [price, setPrice] = useState(0);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://www.ksrbluemetals.site/api/prices");
      const data = await response.json();
      setPrices(data.data[0]);
    })();
  }, []);

  const confirmHandller = () => {
    setConfirm(true);
  };
  const submitHandller = async () => {
    setConfirm(false);
    if (name.length > 0 && email.length > 0 && mobile.length > 0) {
      const orderRes = await fetch(
        "https://www.ksrbluemetals.site/api/orders",
        {
          method: "POST",
          body: JSON.stringify({
            amount: price * 100,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await orderRes.json();
      console.log(data);
      var options = {
        key: "rzp_test_QnI67kwM3hCK4O",
        amount: price * 100,
        currency: "INR",
        name: "KSR Blue Metals",
        description:
          "KSR Blue Metals Payment" + product + " x " + unit + " units",
        image: "https://example.com/your_logo",
        order_id: data.id,
        handler: function (response) {
          fetch("https://www.ksrbluemetals.site/api/addorders", {
            method: "POST",
            body: JSON.stringify({
              name: name,
              email: email,
              address: address,
              amount: price,
              units: unit,
              mobile: mobile,
              order_id: data.id,
              payment_id: response.razorpay_payment_id,
              payment_signature: response.razorpay_signature,
              product_type: product,
              pincode: pin,
              district: district,
              order_date: new Date(),
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          toast.success("Payment Successful");
        },
        prefill: {
          name: name,
          email: email,
          contact: mobile,
        },
        theme: {
          color: "#3399cc",
        },
      };
      rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        toast.error("Payment Failed. Try Again");
      });
      rzp1.open();
      setName("");
      setEmail("");
      setEmail("");
      setProduct("");
      setUnit("");
      setMobile("");
      setAddress("");
      setCity("");
      setDistrict("");
      setPin("");
    } else {
      toast.error("All Fields Are Required !");
    }
  };

  return (
    <div className={styles.root}>
      <h1>Book Your Order</h1>

      <div className={styles.form}>
        <TextField
          label="Full Name"
          required
          fullWidth
          className={styles.field}
          placeholder="KSR Blue Metals"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          label="Email"
          required
          type={"email"}
          fullWidth
          className={styles.field}
          placeholder="contact@ksr.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormControl fullWidth className={styles.field}>
          <InputLabel id="select-label">Product</InputLabel>
          <Select
            labelId="select-label"
            value={product}
            label="Product"
            onChange={(e) => setProduct(e.target.value)}
          >
            <MenuItem value="msand">M-Sand</MenuItem>
            <MenuItem value="psand">P-Sand</MenuItem>
            <MenuItem value="halfJally">1/2 Jally</MenuItem>
            <MenuItem value="oneHalfJally">1-1/2 Jally</MenuItem>
            <MenuItem value="threebyfourJally">3/4 Jally</MenuItem>
            <MenuItem value="chips">Chips Jally</MenuItem>
            <MenuItem value="powder">Powder</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Unit"
          required
          type={"number"}
          fullWidth
          className={styles.field}
          onChange={(e) => {
            setUnit(e.target.value);
            setPrice(prices[product] * parseInt(e.target.value));
          }}
          value={unit}
        />
        <TextField
          label="Mobile No"
          required
          type={"tel"}
          fullWidth
          className={styles.field}
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
        />
        <TextField
          multiline
          rows={5}
          required
          label="Address"
          fullWidth
          className={styles.field}
          placeholder="Delivery Address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <TextField
          label="City/Village"
          required
          fullWidth
          className={styles.field}
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <TextField
          label="District"
          required
          fullWidth
          className={styles.field}
          onChange={(e) => setDistrict(e.target.value)}
          value={district}
        />
        <TextField
          label="Pin code"
          required
          fullWidth
          className={styles.field}
          onChange={(e) => setPin(e.target.value)}
          value={pin}
        />
        <Button variant="contained" onClick={confirmHandller}>
          Pay
        </Button>
      </div>
      <ToastContainer />
      <Dialog open={confirm}>
        <DialogTitle>Confirm Order</DialogTitle>
        <DialogContent>
          <h3>Product: {product}</h3>
          <h3>Unit: {unit}</h3>
          <h3>Price: {price}</h3>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirm(false)}>Cancel</Button>
          <Button onClick={submitHandller}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Shop;
