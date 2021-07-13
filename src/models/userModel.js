const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    booksIssued:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Book'
        }
    ],
    fine:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})

const User=mongoose.model('User',UserSchema)

module.exports=User