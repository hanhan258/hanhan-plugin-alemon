import { plugin, Messagetype, segment } from 'alemon'
import { createQrcode } from 'alemon'
import fetch from 'node-fetch'

export class voice extends plugin {
  constructor() {
    super({
      /** 功能描述 */
      dsc: '憨憨视频类',
      rule: [
        {
          /** 命令正则匹配 */
          reg: /^\/抖音变装$/,
          /** 执行方法 */
          fnc: 'dybz'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/随机裙子$/,
          /** 执行方法 */
          fnc: 'sjqz'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/甜妹$/,
          /** 执行方法 */
          fnc: 'tm'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/随机小姐姐$/,
          /** 执行方法 */
          fnc: 'sjxjj'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/双倍快乐$/,
          /** 执行方法 */
          fnc: 'sbkl'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/(萝莉|loli)$/,
          /** 执行方法 */
          fnc: 'loli'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/玉足$/,
          /** 执行方法 */
          fnc: 'yz'
        }
      ]
    })
  }

  // 抖音变装
  async dybz(e) {
    const urls = 'http://api.yujn.cn/api/bianzhuang.php'
    const resp = await fetch(urls)
    console.log(resp.url)
    await e.reply(await createQrcode(resp.url))
  }

  // 随机裙子
  async sjqz(e) {
    const urls = 'http://api.yujn.cn/api/jksp.php?type=video'
    const resp = await fetch(urls)
    console.log(resp.url)
    await e.reply(await createQrcode(resp.url))
  }

  // 甜妹
  async tm(e) {
    const urls = 'http://api.yujn.cn/api/tianmei.php?type=video'
    const resp = await fetch(urls)
    console.log(resp.url)
    await e.reply(await createQrcode(resp.url))
  }

  // 随机小姐姐
  async sjxjj(e) {
    const urls = 'http://api.yujn.cn/api/xjj.php?'
    const resp = await fetch(urls)
    console.log(resp.url)
    await e.reply(await createQrcode(resp.url))
  }

  // 双倍快乐
  async sbkl(e) {
    const urls = 'http://api.yujn.cn/api/sbkl.php?type=video'
    const resp = await fetch(urls)
    console.log(resp.url)
    await e.reply(await createQrcode(resp.url))
  }

  // 萝莉
  async loli(e) {
    const urls = 'http://api.yujn.cn/api/luoli.php?type=video'
    const resp = await fetch(urls)
    console.log(resp.url)
    await e.reply(await createQrcode(resp.url))
  }

  // 玉足
  async yz(e) {
    const urls = 'http://api.yujn.cn/api/yuzu.php?type=video'
    const resp = await fetch(urls)
    console.log(resp.url)
    await e.reply(await createQrcode(resp.url))
  }
}
