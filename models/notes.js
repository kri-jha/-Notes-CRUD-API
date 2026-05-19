const mogoose = require('mongoose');

const noteSchema = new mogoose.Schema(
{
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
}
);
module.exports = mongoose.model("Note", noteSchema);
