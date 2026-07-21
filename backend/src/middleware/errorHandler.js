export const errorHandler = (err,req,res,next) => {
    console.log("Error handler middleware triggered:",err);
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal server error";

    if(message === "ValidationError"){
        statusCode = 400;
        message = "Bad Request Validation Error: "+err.message;
    }
    else if(message == "CastError"){
        statusCode = 400;
        message = "Bad Request Cast Error: "+err.message;
    }
    res.status(statusCode).json({
        success: false,
        error: message
    });
};