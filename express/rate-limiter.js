import rateLimit from 'express-rate-limit';

const customratelimiter = rateLimit({
    windowMs :15*60*1000,
    max: 100, 
    handler : (req, res) => {
        res.status(429).json({message : 'Too many requests'})
    }
})