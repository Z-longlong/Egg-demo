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
    async getNotFound() {
        this.ctx.status = 404;
    }
    async getServerError() {
        this.ctx.status = 500;
    }
    // async getToken() {
    //     const count = this.ctx.cookies.get('token', { httpOnly: false, signed: false, encrypt: true });
    //     this.ctx.body = '您的token为:' + count;
    // }
    // async setToken() {
    //     const rename = '是龙龙啊';
    //     this.ctx.cookies.set('token', rename, { httpOnly: false, signed: false, encrypt: true });
    //     this.ctx.body = '您的token更改为:' + rename;
    // }
}

module.exports = HomeController;
