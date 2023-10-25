   // config-overrides.js
   module.exports = function override(config, env) {
     config.module.rules.push({
       test: /\.html$/,
       use: ['html-loader'],
     });

     return config;
   };
