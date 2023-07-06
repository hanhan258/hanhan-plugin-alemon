import { plugin, Messagetype, segment } from 'alemon'
import fetch from 'node-fetch'
import axios from 'axios'
import he from 'he'

export class text extends plugin {
  constructor() {
    super({
      dsc: '憨憨文本类',
      rule: [
        {
          /** 命令正则匹配 */
          reg: /^\/发癫/,
          /** 执行方法 */
          fnc: 'fd'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/今天是几号$/,
          /** 执行方法 */
          fnc: 'today'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/历史上的今天$/,
          /** 执行方法 */
          fnc: 'history'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/人生倒计时$/,
          /** 执行方法 */
          fnc: 'rsdjs'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/随机日记$/,
          /** 执行方法 */
          fnc: 'sjrj'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/舔狗日记$/,
          /** 执行方法 */
          fnc: 'tgrj'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/新春祝福$/,
          /** 执行方法 */
          fnc: 'newyear'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/(污污|污句子)$/,
          /** 执行方法 */
          fnc: 'wjz'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/网易云热评$/,
          /** 执行方法 */
          fnc: 'wyyrp'
        },
        {
          /** 命令正则匹配 */
          reg: /^\/油价(.*)$/,
          /** 执行方法 */
          fnc: 'yjcx'
        }
      ]
    })
  }

  // 油价查询
  async yjcx(e) {
    const sendmsg = []
    const encode = e.cmd_msg.replace(/^\/油价/, '').trim()
    const shengfen = [
      '北京',
      '上海',
      '江苏',
      '天津',
      '重庆',
      '江西',
      '辽宁',
      '安徽',
      '内蒙古',
      '福建',
      '宁夏',
      '甘肃',
      '青海',
      '广东',
      '山东',
      '广西',
      '山西',
      '贵州',
      '陕西',
      '海南',
      '四川',
      '河北',
      '西藏',
      '河南',
      '新疆',
      '黑龙江',
      '吉林',
      '云南',
      '湖北',
      '浙江',
      '湖南'
    ]
    const result = shengfen.includes(encode)
    if (!result) {
      await e.reply('只支持省份查询哦')
      return
    }
    console.log(encode)
    const url = `https://api.qqsuu.cn/api/dm-oilprice?prov=${encode}`
    const response = await axios.get(url) // 调用接口获取数据
    if (response.data.code == 200) {
      sendmsg.push('=====查询省份：', response.data.data.prov, '=====\n')
      sendmsg.push('0#柴油：', response.data.data.p0, '\n')
      sendmsg.push('89#汽油：', response.data.data.p89, '\n')
      sendmsg.push('92#汽油：', response.data.data.p92, '\n')
      sendmsg.push('95#汽油：', response.data.data.p95, '\n')
      sendmsg.push('98#汽油：', response.data.data.p98, '\n')
      sendmsg.push(response.data.data.time, '\n')
      sendmsg.push('======================')
      await e.reply(sendmsg)
    } else {
      await e.reply('查询失败,可能接口失效力~，请联系憨憨捏~')
    }
  }

  // 网易云热评
  async wyyrp(e) {
    const resp = await fetch('https://api.f4team.cn/API/wyrp/api.php?type=text')
    const result = await resp.text()
    await e.reply(result)
  }

  // 污句子
  async wjz(e) {
    const resp = await fetch('http://api.yujn.cn/api/text_wu.php')
    const str = await resp.text()
    console.log(str)
    const result = str.trim()
    await e.reply(result)
  }

  // 新春祝福
  async newyear(e) {
    const resp = await fetch('http://api.yujn.cn/api/zhufu.php')
    const str = await resp.text()
    const result = str.trim()
    await e.reply(result)
  }

  // 舔狗日记
  async tgrj(e) {
    const resp = await fetch('https://api.f4team.cn/API/tgrj/api.php')
    await e.reply(await resp.text())
  }

  // 随机日记
  async sjrj(e) {
    const resp = await fetch('http://api.yujn.cn/api/baoan.php?')
    const result = he.decode(await resp.text()).replace(/<br>/g, '\n')
    await e.reply(result)
  }

  // 人生倒计时
  async rsdjs(e) {
    const sendmsg = []
    const url = 'https://v.api.aa1.cn/api/rsdjs/'
    const response = await axios.get(url) // 调用接口获取数据
    sendmsg.push(response.data.month, '\n')
    sendmsg.push(response.data.week, '\n')
    sendmsg.push(response.data.day, '\n')
    sendmsg.push(response.data.time)
    await e.reply(sendmsg)
  }

  // 发癫
  async fd(e) {
    const sendmsg = []
    const encode = e.cmd_msg.replace(/^\/发癫/, '').trim()

    const url = `https://xiaobapi.top/api/xb/api/onset.php?name=${encode}`
    const response = await axios.get(url) // 调用接口获取数据
    const res = response.data.data
    sendmsg.push(res)
    await e.reply(sendmsg)
  }

  // 今天是几号
  async today(e) {
    const url = 'https://api.f4team.cn/API/rl/api.php?type=text'
    const response = await fetch(url) // 调用接口获取数据
    const res = await response.text()
    const sendmsg = []
    sendmsg.push(res)
    await e.reply(sendmsg, true)
  }

  // 历史上的今天
  async history(e) {
    const url = 'https://api.f4team.cn/API/lishi/api.php?n=10'
    const response = await fetch(url) // 调用接口获取数据
    const res = await response.text()
    const sendmsg = []
    sendmsg.push(res)
    await e.reply(sendmsg)
  }
}
