import dotenv from 'dotenv'
dotenv.config()

interface configEnvType {
    MONGODB_URI: string,
    PORT: number
    
}

const configEnv: configEnvType =  {
    MONGODB_URI: process.env.MONGO_URI!,
    PORT: Number(process.env.PORT)! || 3000
}

export default configEnv