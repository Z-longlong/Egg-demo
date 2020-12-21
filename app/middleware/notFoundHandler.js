'use strict';
module.exports = () => {
    return async function(ctx, next) {
        await next();
        if (ctx.status === 404 && !ctx.body) {
            if (ctx.acceptJSON) {
                ctx.body = { error: 'Not Found' };
            } else {
                ctx.body = '<h1>Page Not Found</h1>';
            }
        }
    };
};
