module.exports = () => {
    return (req, res, next) => {
        
        const time = new Date().toISOString()
        console.log(`Logger [${req.method}] [${req.url}] [${time}]`)
        next()
    }
    
}
