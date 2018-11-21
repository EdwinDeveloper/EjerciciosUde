const express = require('express');
const routerKoders = express.Router();
const useCaseKoders = require('../useCases/koders');
routerKoders.get('/',async (req,res)=>{
    try {
        const allKoders = await useCaseKoders.getKoders();
        //console.log(allKoders);
        res.json({
        success:true,
        message:"All users",
        payload:{
            allKoders
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not show the koders",
            error:[
                error
            ]
        });
    }
});

routerKoders.post('/',async(req,res)=>{
    try {
        const koderData = req.body;
        //console.log(koderData,"fa oi");
        const newKoder = await useCaseKoders.createKoder(koderData);
        //console.log(newKoder);
        res.json({
        success:true,
        message:"Koder Created",
        payload:{
            newKoder
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not create the koder",
            error:[
                error
            ]
        });
    }
});

routerKoders.delete('/:id',async(req,res)=>{
    try {
        const { id } = req.params;
        console.log(id);
        const deleteKoder = await useCaseKoders.deletekoder(id);
        res.json({
        success:true,
        message:"Koder Deleted",
        payload:deleteKoder
        });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not eliminate koder",
            error:[
                error
            ]
        });
    }
});

routerKoders.put('/',async(req,res)=>{
    try {
        const putKoders = req.body;
        const koderPut = await useCaseKoders.updateKoder(putKoders);
        res.json({
        success:true,
        message:"Koder Updated",
        payload:{
            koderPut
        }
    });
    } catch (error) {
        res.status(404);
        res.json({
            success:false,
            message:"Could not update the Koder",
            error:[
                error
            ]
        });
    }
});

module.exports = {
    routerKoders
}