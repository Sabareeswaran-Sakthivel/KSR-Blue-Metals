import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import styles from "../styles/Shop.module.css";
//import useRazorpay from "react-razorpay";

function Shop() {
   //const Razorpay = useRazorpay();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [unit, setUnit] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [pin, setPin] = useState("");

  var options = {
    key: "rzp_test_QnI67kwM3hCK4O", // Enter the Key ID generated from the Dashboard
    amount: "5000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "KSR Blue Metals",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: "order_JZo5GvIiWQT9D8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response) {
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
  var rzp1 = new Razorpay(options);
  rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });

  const submitHandller = () => {
    if (name.length > 0 && email.length > 0 && mobile.length > 0) {
      rzp1.open();
      // setName('')
      // setEmail('')
      // setEmail('')
      // setProduct('')
      // setUnit('')
      // setMobile('')
      // setAddress('')
      // setCity('')
      // setDistrict('')
      // setPin('')
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
            <MenuItem value="1/2 jally">1/2 Jally</MenuItem>
            <MenuItem value="1-1/2 jally">1-1/2 Jally</MenuItem>
            <MenuItem value="3/4 jally">3/4 Jally</MenuItem>
            <MenuItem value="chips jally">Chips Jally</MenuItem>
            <MenuItem value="Powder">Powder</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Unit"
          required
          type={"number"}
          fullWidth
          className={styles.field}
          onChange={(e) => setUnit(e.target.value)}
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
        <Button variant="contained" onClick={submitHandller}>
          Pay
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Shop;
