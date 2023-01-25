const logger = (req, res, next) => {
    console.log(`Request Method: ${req.method} + Request Protocol: ${req.protocol} ://${req.get('host')} ${req.originalURL}`);
};