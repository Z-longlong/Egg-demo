'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/home', controller.home.getHome);
    router.get('/notFound', controller.home.getNotFound);
    router.get('/serverError', controller.home.getServerError);
    router.get('/getToken', controller.home.getToken);
    router.get('/setToken', controller.home.setToken);
};
