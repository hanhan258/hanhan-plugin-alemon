import { createApps } from 'alemon'
import { AppName } from './app.config.js'
import chalk from 'chalk'
await createApps(AppName)
  .then(() => {
    console.info(chalk.green.bold('**************************************'))
    console.info(chalk.green.bold('hanhan-plugin加载成功'))
    console.info(chalk.green.bold('            ▃▆█▇▄▖'))
    console.info(chalk.green.bold('　 　 　 ▟◤▖      ◥█▎'))
    console.info(chalk.green.bold('   　 ◢◤　 ▐　　　  ▐▉'))
    console.info(chalk.green.bold('　 ▗◤　　　▂　▗▖　　▕█▎'))
    console.info(chalk.green.bold('　◤　▗▅▖◥▄　▀◣　　█▊'))
    console.info(chalk.green.bold('▐　▕▎◥▖◣◤　　　　◢██'))
    console.info(chalk.green.bold('█◣　◥▅█▀　　　　▐██◤'))
    console.info(chalk.green.bold('▐█▙▂　　     　◢██◤'))
    console.info(chalk.green.bold('◥██◣　　　　◢▄◤'))
    console.info(chalk.green.bold(' 　　▀██▅▇▀'))
    console.info(chalk.green.bold('仓库地址 https://github.com/hanhan258/hanhan-plugin-alemon'))
    console.info(chalk.green.bold('**************************************'))
  })
  .catch(err => console.log(err))
