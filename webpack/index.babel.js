import Config, {environment} from 'webpack-config';

environment.setAll({
  env: () => process.env.NODE_ENV || 'development'
});

export default new Config().extend('webpack/[env].js');
