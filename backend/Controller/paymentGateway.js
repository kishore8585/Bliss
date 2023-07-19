const Razorpay = require('razorpay');

module.exports.createpayorder=async (amount)=>{
    var instance = new Razorpay({ key_id: 'rzp_test_0F9S5DikFPgcji', key_secret: 'eJAH0c0ykwUOb8C6PiY7dyy7'})

    var options = {
        amount: parseInt(amount*100),  // amount in the smallest currency unit
        currency: "USD",
      };
    console.log(typeof(options.amount),options.amount)
    return instance.orders.create(options);
}