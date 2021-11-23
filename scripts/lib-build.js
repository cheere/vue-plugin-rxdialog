const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const WebpackConf = require('./webpack.conf')


const spinner = ora('building for production...')
spinner.start()

webpack(WebpackConf, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'))
    process.exit(1)
  }

  console.log(chalk.cyan('  Build complete.\n'))
})