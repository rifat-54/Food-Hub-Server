export function notFound(req, res) {
    res.status(404).json({
        message: "route not found!",
        path: req.originalUrl,
        time: new Date().toISOString()
    });
}
//# sourceMappingURL=notFound.js.map