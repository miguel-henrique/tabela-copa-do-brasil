const proxy = [
    {
      context: '/api',
      target: 'https://api.api-futebol.com.br/v1',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;