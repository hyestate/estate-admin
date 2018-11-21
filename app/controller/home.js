'use strict';

const axios = require('axios');
function request(opt) {
    opt = Object.assign({
        url: '',
        params: {},
        method: 'GET',
        responseType: 'json',
        headers: Object.assign({}, opt.headers || {}),
        credentials: 'same-origin' // 设置为同域，那么会自动带上cookies，就能保持登录状态
    }, opt);

    if (!opt.url) {
        throw new Error('url is required');
    }

    return axios(opt).then(function (response) {
        if (response.status === 200) {
            return response.data;
        }
        throw new Error('请求错误：' + response.status + ' ' + response.statusText + '  '  + opt.url);
    });
}


function get(conf) {
    let opt = Object.assign({}, conf);
    opt.method = 'GET';
    opt.params = opt.params || opt.query;
    return request(opt);
}

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async render() {
    if (this.app.config.env === 'prod') {
        await this.ctx.render('index.html');
    } else {
        let html = await get({
            url: 'http://localhost:8001/',
            method: 'get',
            responseType: 'text'
        });
        console.log(html)
        this.ctx.body =  html;
        
        // this.ctx.body = await this.ctx.curl('http://localhost:8080', {
        //     headers: { 
        //         'Accept': 'text/html',
        //         'responseType': 'text',
        //         dataType: 'text'
        //     }
        // });
    }
  }
}

module.exports = HomeController;
