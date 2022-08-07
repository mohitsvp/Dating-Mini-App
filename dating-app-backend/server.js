import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import cardsController from './controllers/cardsController.js';
const app = express();

app.use(express.json());
app.use(Cors());

const connection_url = `mongodb+srv://mohitsvp:mohit-123@cluster0.obfd3ka.mongodb.net/?retryWrites=true&w=majority`;


mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
})




app.get("/", (req, res)=>{
    res.status(200).send("Hello");
})
app.use("/dating", cardsController);



const port = process.env.PORT || 8001

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})
