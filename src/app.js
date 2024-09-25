import express from 'express'
import mongoose from 'mongoose'
import contactsRouter from './routes/contacts.router.js'
const app = express()
const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* mongoose.connect('mongodb+srv://omarmanias:1234562024@cluster0.3lmci0d.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); */
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})

app.use("/contacts", contactsRouter)