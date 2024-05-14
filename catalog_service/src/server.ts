import app from "./app";

const PORT = process.env.PORT || 7000;

export const startServer = async () => {
    app.listen(PORT, () => {
        console.log(`App is listening on port${PORT}`);
    });

    process.on("uncaughtException", async (err) => {
        console.log(err);
        process.exit(1);
    });
};


startServer().then(()=>{
    console.log("server is up");
})