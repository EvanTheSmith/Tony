const logger = (req, res, next) => {
    console.log(`Request Method: ${req.method} / Request Protocol: ${req.protocol} / Get Host: ${req.get('host')} / URL: ${req.originalURL}`);
    next();
};

module.exports = logger;