const db = require('../config')
const router=require('express').Router()
const moment =require('moment')
router.get('/',(req,res)=>{
sql="SELECT * FROM prego.devices"
    db.query(sql,(err,result)=>{
        if(err)console.log(err);
        res.json(result)
    })
})

router.post('/login',(req,res)=>{
const {username,password}=req.body
sql=`Select * from users where username="${username}"`
db.query(sql,(err,result)=>{
    if(err)console.log(err);
    // res.json(result)
    if(result.length>0){
        if(result[0].password==password){
            res.status(200).json({success:true,msg:"Login Successfully",user:result[0]})
        }else{
        res.json({success:false,msg:"Wrong Password !"})
        }
    }else{
        res.json({success:false,msg:"User Not Found !"})

    }
})
})
router.get('/GetDevices',(req,res)=>{
    const username=req.query.username
    sql= `select * from devices where username="${username}"`
    db.query(sql,(err,result)=>{
        if(err)console.log(err);
        res.status(200).json({success:true,msg:"Device Details",devices:result})
    })
})

router.get('/GetUsers',(req,res)=>{
    sql= `select * from users`
    db.query(sql,(err,result)=>{
        if(err)console.log(err);
        res.status(200).json({success:true,msg:"Users Details",users:result})
    })
})
router.get('/GetAllDevices',(req,res)=>{
    sql= `SELECT * FROM devices`
    db.query(sql,(err,result)=>{
        if(err)console.log(err);
        res.status(200).json({success:true,msg:"Devices Details",devices:result})
    })
})
router.post('/InsertUser',(req,res)=>{
    const{username,password}=req.body
    sql=`insert into users(username,password)Values(?,?)`
    db.query(sql,[username,password],(err,result)=>{
        if(err)console.log(err);
        res.status(200).json({success:true,msg:"Users Inserted Successfully "})
    })
})
router.post('/DeleteUsers',(req,res)=>{
    const id=req.body.id
    sql= `delete from users where id=?`
    db.query(sql,[id],(err,result)=>{
        if(err)console.log(err);
        res.status(200).json({success:true,msg:"Users Deleted Successfully "})
    })
})
router.post('/UpdateUser',(req,res)=>{
    const{username,password,id}=req.body
    sql=`update users set username="${username}",password="${password}" where id=${id}`
    db.query(sql,(err,result)=>{
        if(err)console.log(err);
        res.status(200).json({success:true,msg:"Users Updated Successfully "})
    })
})
router.post('/DeleteDevice',(req,res)=>{
    const id=req.body.id
    sql= `delete from devices where id=?`
    db.query(sql,[id],(err,result)=>{
        if(err)console.log(err);
        res.status(200).json({success:true,msg:"Device Deleted Successfully "})
    })
})
router.post('/InsertDevice',(req,res)=>{
    const{username,device_id}=req.body
    sql=`insert into devices(username,device_id)Values(?,?)`
    db.query(sql,[username,device_id],(err,result)=>{
        if(err)console.log(err);
        res.status(200).json({success:true,msg:"Devices Inserted Successfully "})
    })
})
router.post('/UpdateDevice',(req,res)=>{
    const{username,device_id,id}=req.body
    sql=`update devices set device_id="${device_id}",username="${username}" where id=${id}`
    db.query(sql,(err,result)=>{
        if(err)console.log(err);
        res.status(200).json({success:true,msg:"Devices Updated Successfully "})
    })
})
module.exports=router