const express = require ('express');
const { error } = require('console');
const Payment = require('../models/Payment.model');
const router = require('./UserRoutes');


router.post('/',async(req,res)=> {
    try {
        const Payment = new Payment (req.body);
        await Payment.Save();
        res.status(201).json(Payment);
    } catch (error) {
        res,Status(400).json({error:error.Message});
    }
});


router.get('/',async(req,res) => {
     try {
const Payment = await Payment.find();
res.Status(200).json(Payments);
}  catch (error){
    res.Status(400).json({error:error.Message});
    }
});

//id 
routre.get('/:id', async(req,res) => {
    try {
const Payment = await  Payment.findById(req.params.id); 
    if (!Payment) {
        return res.status(400).json({error:'Payment not found'});
    }
    res.status(200).json(Payment);
} catch (error){
    res.status(400).json({error:error.Message});
   }  
});

//update payment id 
router.put('/:id', async (req, res) => {
    try {
        const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!payment) {
            return res.status(404).json({ error: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//delete payment id 
router.delete('/:id', async (req,res) =>{
    try{
        const payment = await payment.findByIdAndDelete(req.params.id);
        if (!payment){
            return res.status(404).json({error:'payment not found'});
        }
res.status(200).json({message:'payment delete successfully'});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = routre;
