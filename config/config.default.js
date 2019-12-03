/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

const path = require('path');

module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1575256308066_2229';

    // add view template
    config.view = {
        root: [
            path.join(appInfo.baseDir, 'app/view'),
        ].join(','),
        defaultViewEngine: 'nunjucks',
        // 左边写成.html后缀，会自动渲染.html文件
        mapping: {
            '.html': 'nunjucks',
        },
    };

    // add your middleware config here
    // 文件名称就是插件名称
    config.middleware = ['notFoundHandler'];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};