module.exports = {
  default: {
    paths: ['tests/features/**/*.feature'],
    require: ['tests/steps/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress','html:reports/index.html'],
    publishQuiet: true,
    parallel: 2,
    retry: 1,
    setTimeout: 60 * 1000
  }
};
