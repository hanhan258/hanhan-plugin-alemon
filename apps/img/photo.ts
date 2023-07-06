import { plugin, Messagetype, segment } from 'alemon'
import axios from 'axios'

export class photo extends plugin {
  constructor() {
    super({
      dsc: '憨憨图片类',
      rule: [
        {
          /** 命令正则匹配 */
          reg: /^\/天气/,
          /** 执行方法 */
          fnc: 'tianqi'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/mc酱$/,
          /** 执行方法 */
          fnc: 'mc'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/小c酱$/,
          /** 执行方法 */
          fnc: 'xiaoc'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/兽猫酱$/,
          /** 执行方法 */
          fnc: 'shoumao'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/买家秀$/,
          /** 执行方法 */
          fnc: 'buyerShow'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/mt$/,
          /** 执行方法 */
          fnc: 'mt'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/随机(ai|AI)$/,
          /** 执行方法 */
          fnc: 'sjai'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/手写/,
          /** 执行方法 */
          fnc: 'sx'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/每日英语$/,
          /** 执行方法 */
          fnc: 'mryy'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/随机柴郡$/,
          /** 执行方法 */
          fnc: 'cj'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/随机acg$/,
          /** 执行方法 */
          fnc: 'random_acg'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/随机东方$/,
          /** 执行方法 */
          fnc: 'random_orient'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/一二布布$/,
          /** 执行方法 */
          fnc: 'yebb'
        }
      ]
    })
  }

  // 一二布布
  async yebb(e) {
    // 发送消息
    await e.reply(segment.image('http://api.yujn.cn/api/bubu.php?'))
    return true // 返回true 阻挡消息不再往下
  }

  // 随机柴郡
  async cj(e) {
    // 发送消息
    await e.reply(segment.image('http://api.yujn.cn/api/chaijun.php?'))
    return true // 返回true 阻挡消息不再往下
  }

  // 每日英语
  async mryy(e: Messagetype) {
    const response = await fetch('https://open.iciba.com/dsapi/') // 调用接口获取数据
    const data = await response.json()
    await e.reply(segment.image(data.fenxiang_img))
  }

  // 手写模拟器
  async sx(e) {
    const encode = e.cmd_msg.replace(/^\/手写/, '').trim()
    // 发送消息
    await e.reply(segment.image(`https://zj.v.api.aa1.cn/api/zuoye/?msg=${encode}`))
    return true // 返回true 阻挡消息不再往下
  }

  // 猫羽雫图片天气
  async tianqi(e) {
    const encode = e.cmd_msg.replace(/^\/天气/, '').trim()
    const img = segment.image(
      `http://api.caonm.net/api/qqtq/t?msg=${encode}&key=9eEVLhmjy98VKTkg4jSuUo2vVO`
    )
    // 发送消息
    console.log(img)
    if (img) e.reply(img)
    else e.reply('图片裂开了捏~')
    return true // 返回true 阻挡消息不再往下
  }

  // mc酱
  async mc(e) {
    // 发送消息
    await e.reply(segment.image('https://www.hlapi.cn/api/mcj'))
    return true // 返回true 阻挡消息不再往下
  }

  // 小c酱
  async xiaoc(e) {
    // 发送消息
    await e.reply(segment.image('http://api.yujn.cn/api/xcj.php?'))
    return true // 返回true 阻挡消息不再往下
  }

  // 兽猫酱
  async shoumao(e) {
    // 发送消息
    await e.reply(segment.image('http://api.yujn.cn/api/smj.php?'))
    return true // 返回true 阻挡消息不再往下
  }

  // 美腿
  async mt(e) {
    await e.reply(segment.image('http://lx.linxi.icu/API/meitui.php'))
    return true // 返回true 阻挡消息不再往下
  }

  // 随机ai
  async sjai(e) {
    // 发送消息
    await e.reply(segment.image('http://lx.linxi.icu/API/aitu.php'))
    return true // 返回true 阻挡消息不再往下
  }

  // 买家秀
  async buyerShow(e: Messagetype): Promise<boolean> {
    const url = 'https://api.dzzui.com/api/imgtaobao'
    axios
      .get(url, { maxRedirects: 0, validateStatus: null })
      .then(response => {
        if (response.status === 302) {
          console.log('图片地址:', response.headers.location)
          // 发送消息
          e.reply(segment.image(response.headers.location))
        } else {
          throw new Error('网络请求出错')
        }
      })
      .catch(error => {
        console.error('发生错误:', error)
      })

    return true // 返回true 阻挡消息不再往下
  }

  // 随机二次元
  async random_acg(e) {
    // 'https://www.dmoe.cc/random.php',
    // 'http://www.98qy.com/sjbz/api.php',
    // 'https://t.mwm.moe/mp/',
    // 'https://t.mwm.moe/pc/',
    // 'https://api.ghser.com/random/pc.php',
    // 'https://api.ghser.com/random/pe.php',
    // 'https://www.loliapi.com/acg/',
    // 'https://api.paugram.com/wallpaper/'
    await e.reply(segment.image('https://t.mwm.moe/mp/'))
    return true
  }

  // 随机东方
  async random_orient(e) {
    // 发送消息
    await e.reply(segment.image('https://img.paulzzh.tech/touhou/random'))
    return true
  }
}
