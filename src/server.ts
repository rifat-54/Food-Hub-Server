import app from "./app"

const port=process.env.PORT || 5000

async function main(){
    try {
        
        app.listen(port,()=>{
            console.log(`server is running on port : ${port}`)
        })

    } catch (error) {
        console.error("An Error Occurred:",error)
    }
}

main()