module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'graphql-apollo-server',
      script    : './src/app.js',
      instances : "4",
      env: {
        NODE_ENV: "development"
      },
      env_test : {
        NODE_ENV: 'test'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ]
};
