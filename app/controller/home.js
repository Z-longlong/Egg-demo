'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        const userInfo = await ctx.service.home.find();
        ctx.body = userInfo;
    }
    async getHome() {
        const { ctx } = this;
        const title = '龙龙的Egg-Demo';
        await ctx.render('index', {
            title,
        });
    }
}

module.exports = HomeController;
