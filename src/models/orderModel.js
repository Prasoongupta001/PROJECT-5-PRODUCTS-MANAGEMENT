const mongoose=require("mongoose")

const ObjectId=mongoose.Types.ObjectId

const oderSchema=new mongoose.Schema({



    userId: {type:ObjectId, refs:"UserData", required:true},

    items: [{
      productId: {type:ObjectId, refs:"Product" , required:true},
      quantity: {type:Number, required:true, min:1}
    }],

    totalPrice: {type:Number, required:true },

    totalItems: {type:Number, required:true},

    totalQuantity: {type:Number, required:true},

    cancellable: {type:Boolean, default: true},

    status: {type:String, default: 'pending', enum:["pending", "completed", "canclled"]},

    deletedAt: {type:Date}, 

    isDeleted: {type:Boolean, default: false},
    


})

module.exports=mongoose.model("Order",oderSchema)