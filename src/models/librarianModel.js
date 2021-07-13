const mongoose=require('mongoose')

const LibrarianSchema=mongoose.Schema({
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
    description:{
        type:String,
    }
},{
    timestamps:true
})

const Librarian=mongoose.model('Librarian',LibrarianSchema)

module.exports=Librarian