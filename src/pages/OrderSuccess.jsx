import React, { useEffect } from "react";

const OrderSuccess = () => {
  useEffect(() => {
    alert("🎉 Order placed successfully!");
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>✅ Order Placed!</h1>
      <p>Thank you for shopping at Pawtopia 🐾</p>
    </div>
  );
};

export default OrderSuccess;
