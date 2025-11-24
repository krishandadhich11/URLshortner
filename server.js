import express from 'express'
import urlRoute from './router.js'
import { connectToMongoDB } from './ConnectDB/connectDB.js';


const app = express()
const PORT = 3000;

connectToMongoDB("mongodb+srv://krishna1100rd:6K8Y6IbKSAMHN1dV@cluster0.b0kzqix.mongodb.net/URLshortner")
.then(()=> console.log('Mongodb connected'));

app.use("/url", urlRoute);
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`))
