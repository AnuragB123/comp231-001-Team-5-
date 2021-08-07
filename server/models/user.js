let mongoose = require ('mongoose');
let User = mongoose.Schema
(
    {
        userType:
        {
            type: String,
            default: '',
            trim: true,
            required: 'userType is required'
        },
        userId:
        {
            type: String,
            default: '',
            trim: true,
            required: 'userId is required'
        },
        username:
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        email:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Email is required'
        },
        phone:{
            type: Number,
            default: '',
            trim: true,
        },
        password:
        {
            type: String,
            default: '',
            trim: true,
            required: 'password is required'
        },
        created:
        {
            type: Date,
            default: Date.now
        },
        update:
        {
            type: Date,
            default: Date.now
        },
        todo_list:{
            type:Array,
            default:[]
        },
        done_list:{
            type:Array,
            default:[]
        },
        ongoing_list:{
            type:Array,
            default:[]
        },
        events:{
            type:Array,
            default:[]
        }
    },
    {
        collection: "users"    
    }
);
module.exports.User = mongoose.model('User', User);