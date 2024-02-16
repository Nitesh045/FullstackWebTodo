const mongoose=require('mongoose');
mongoose.connect(process.env.MONGODBURL)
.then(()=>{console.log('connnected ')})
.catch((e)=>{
    console.log('failed')
});

const todoSchema = new mongoose.Schema({
    content:{
        type:String,
        require:true
    },
   
})

const CollectionTodo=new mongoose.model('collectionData',todoSchema);
module.exports=CollectionTodo;