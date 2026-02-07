const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    name: String,
    price: Number,
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    image: String
  }],
  deliveryAddress: {
    type: String,
    required: [true, "Please provide delivery address"]
  },
  contactNumber: {
    type: String,
    required: [true, "Please provide contact number"],
    match: [/^[0-9]{10}$/, "Please provide valid 10-digit phone number"]
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ["Placed", "Processing", "Shipped", "Delivered", "Cancelled"],
    default: "Placed"
  },
  courierName: {
    type: String,
    default: "Pending"
  },
  courierTrackingNumber: {
    type: String,
    default: ""
  },
  totalAmount: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Completed", "Failed"],
    default: "Pending"
  },
  paymentMethod: {
    type: String,
    enum: ["Razorpay", "COD"],
    default: "Razorpay"
  },
  razorpayOrderId: String,
  razorpayPaymentId: String,
  estimatedDeliveryDate: Date,
  notes: String
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);