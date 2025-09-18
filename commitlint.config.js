import baseConfig from 'abruno-dev-config/commitlint.config';

export default {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    'header-max-length': [2, 'always', 200],
  },
};
