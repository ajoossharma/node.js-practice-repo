//with ESM module we can write await without async 
//we can write top level awaits (with no function block)

await connectDB();

const start = async () => {
    await connectionDB();
    await connectCloudinary();
}

start()


//app.use(), app.get(), etc; examples

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));

app.use('/api/user', authLimiter, userRouter)
app.use('/api/seller', authLimiter, sellerRouter)

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})