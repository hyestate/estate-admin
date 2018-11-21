module.exports = app => {
    if (app.config.env === 'local'
    || app.config.env === 'development'
    || app.config.env === 'unittest') {
        app.beforeStart(async () => {
            await app.model.sync();
        })
    }
}