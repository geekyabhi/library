const mongoose=require('mongoose')

const AuthorSchema=mongoose.Schema({
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
    description:{
        type:String,
    }
},{
    timestamps:true
})

const Author=mongoose.model('Author',AuthorSchema)

module.exports=Author