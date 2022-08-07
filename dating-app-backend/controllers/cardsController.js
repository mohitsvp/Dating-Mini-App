import express from 'express';
import Card from '../models/cardsModel.js';

const router = express.Router();


router.get('/cards', (req, res)=>{
    Card.find((err, data)=>{
        if(err){
            return res.status(500).send(err);
        }
        else{
            return res.status(200).send(data);
        }
    })
})


router.post("/cards", (req, res)=>{
    const dbCard = req.body;
    Card.create(dbCard, (err, data)=>{
        if(err){
            return res.status(500).send(err);
        }
        else{
            return res.status(201).send(data);
        }
    })
})


export default router;