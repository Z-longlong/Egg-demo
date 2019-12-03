'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        const userInfo = await ctx.service.home.find();
        ctx.body = userInfo;
    }
}

module.exports = HomeController;