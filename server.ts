import app from "./src/app"
import envConfig from "./src/config/config"
import connectToDatabase from "./src/config/database"

const startServer = async() => {
    await connectToDatabase()
    const port = envConfig.port || 4000
    app.listen(port,() => {
        console.log(`Server started at port ${port}...`)
    })
}


startServer()