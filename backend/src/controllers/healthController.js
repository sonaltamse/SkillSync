export const getHealth = (req, res) => {
    console.log(`Recieved request for ${req.url}`);
    res.status(200).json({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
};