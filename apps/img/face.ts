import { plugin, Messagetype, segment } from 'alemon'
import fetch from 'node-fetch'

export class face extends plugin {
  constructor() {
    super({
      dsc: '憨憨表情包',
      rule: [
        {
          reg: /^\/随机柴郡$/,
          fnc: 'sjcj'
        },
        {
          reg: /^\/一二布布$/,
          fnc: 'yebb'
        },
        {
          reg: /^\/(坤坤|小黑子|鸡|cxk|鸡脚|鸽鸽|哥哥)$/,
          fnc: 'cxk'
        },
        {
          reg: /^\/随机表情$/,
          fnc: 'sjbq'
        }
      ]
    })
  }

  // 随机表情
  async sjbq(e: Messagetype) {
    // 发送消息
    await fetch('http://api.yujn.cn/api/emo.php')
      .then(response => response.text())
      .then(data => {
        const trim = data.trim()
        e.reply(segment.image(trim))
      })
      .catch(error => {
        e.reply('请求发生错误:', error)
      })
    return
  }

  // 随机坤坤
  async cxk(e) {
    // 发送消息
    await e.reply(segment.image('http://api.yujn.cn/api/cxk.php'))
    return true // 返回true 阻挡消息不再往下
  }

  // 一二布布
  async yebb(e: Messagetype): Promise<boolean> {
    return e.reply(segment.image('http://api.yujn.cn/api/bubu.php?'))
  }

  // 随机柴郡
  async sjcj(e: Messagetype): Promise<boolean> {
    return e.reply(segment.image('http://api.yujn.cn/api/chaijun.php?'))
  }
}
