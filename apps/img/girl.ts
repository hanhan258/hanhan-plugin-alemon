import { plugin, Messagetype, segment } from 'alemon'
import fetch from 'node-fetch'
export class help extends plugin {
  constructor() {
    super({
      dsc: '憨憨Girl',
      rule: [
        {
          reg: /^\/(黑丝|hs)/,
          fnc: 'hs'
        },
        {
          reg: /^\/(白丝|bs)$/,
          fnc: 'bs'
        },
        {
          reg: /^\/(JK|jk)$/,
          fnc: 'jk'
        },
        {
          reg: /^\/(写真|xz)$/,
          fnc: 'xz'
        },
        {
          reg: /^\/(小姐姐|xjj)$/,
          fnc: 'xjj'
        }
      ]
    })
  }
  //黑丝
  async hs(e: Messagetype): Promise<boolean> {
    const img = segment.image('http://api.yujn.cn/api/heisi.php?')
    if (img) e.reply(img)
    return false
  }

  //白丝
  async bs(e: Messagetype): Promise<boolean> {
    const img = segment.image('http://api.yujn.cn/api/baisi.php?')
    if (img) e.reply(img)
    return false
  }

  //JK
  async jk(e: Messagetype): Promise<boolean> {
    const img = segment.image('http://api.yujn.cn/api/jk.php??')
    if (img) e.reply(img)
    return false
  }

  //写真
  async xz(e: Messagetype): Promise<boolean> {
    const resp = await fetch('return', {
      redirect: 'follow'
    })
    const result = resp.url
    e.reply(segment.image(result))
    return false
  }

  //小姐姐
  async xjj(e: Messagetype): Promise<boolean> {
    const img = segment.image('http://api.yujn.cn/api/yangyan.php?')
    if (img) e.reply(img)
    return false
  }
}
