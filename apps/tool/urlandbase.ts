import { plugin, Messagetype } from 'alemon'

export class urlandbase extends plugin {
  constructor() {
    super({
      dsc: '憨憨urlandbase',
      rule: [
        {
          reg: /^\/(url|URL)编码.*$/,
          fnc: 'urlEn'
        },
        {
          reg: /^\/(url|URL)解码.*$/,
          fnc: 'urlDe'
        },
        {
          reg: /^\/(base64|Base64)编码.*$/,
          fnc: 'baseEn'
        },
        {
          reg: /^\/(base64|Base64)解码.*$/,
          fnc: 'baseDe'
        }
      ]
    })
  }

  // url编码
  async urlEn(e: Messagetype): Promise<boolean> {
    console.log('url编码：' + e.cmd_msg)
    const message = e.cmd_msg

    const encode = message.replace(/^\/(url|URL)编码/, '').trim()
    const result = encodeURI(encode)
    e.reply('"' + encode + '"编码为：' + result)
    return false
  }

  // url解码
  async urlDe(e: Messagetype): Promise<boolean> {
    const message = e.cmd_msg
    const encode = message.replace(/^\/(url|URL)解码/, '').trim()
    const result = decodeURI(encode)
    e.reply('"' + encode + '"解码为：' + result)
    return false
  }

  // base64编码
  async baseEn(e: Messagetype): Promise<boolean> {
    const message = e.cmd_msg
    const encode = message.replace(/^\/(base|Base)编码/, '').trim()
    const result = Buffer.from(encode).toString('base64')
    e.reply('"' + encode + '"编码为：' + result)
    return false
  }

  // base64解码
  async baseDe(e: Messagetype): Promise<boolean> {
    const message = e.cmd_msg
    const encode = message.replace(/^\/(base|Base)解码/, '').trim()
    const result = Buffer.from(encode, 'base64').toString()
    e.reply('"' + encode + '"解码为：' + result)
    return false
  }
}
