// craco.config.js
module.exports = {
    webpack: {
        configure: (webpackConfig, {env, paths}) => {
            webpackConfig.output.jsonpFunction = 'dfw_webpack'; //THIS IS NEEDED TO DISTINGUISH FROM OTHER RUNNING WEBPACKS
            return webpackConfig;
        },
    },
};