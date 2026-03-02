const authmiddleware = async (req, res, next) => {
    const {token} = req.cookies();
    if (!token) {
        //error
        return res.json({sucess:false})
    }

    try{

        if (token) {
        }
        else {
            return res.json(...);
        }
        next();

    } catch (error) {

    }
}

export default authmiddleware;