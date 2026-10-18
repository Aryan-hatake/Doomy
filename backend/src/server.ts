import configEnv from "./shared/config.js"
import app from './app.js'
import connectDB from './shared/database/db.js'

const port:number = configEnv.PORT || 3000;

await connectDB(configEnv.MONGODB_URI)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

