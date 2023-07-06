import { plugin, Messagetype } from 'alemon'
import { obtainingImages, Config } from '../../api.js'
export class nav extends plugin {
  constructor() {
    super({
      dsc: '憨憨帮助',
      rule: [
        {
          reg: /^\/(nav|憨憨帮助)$/,
          fnc: 'getHelp'
        },
        {
          reg: /^\/menu$/,
          fnc: 'getMenu'
        }
      ]
    })
  }

  // menu
  async getMenu(e: Messagetype) {
    e.reply('/随机柴郡\n/一二布布')
  }

  /**
   * @param e 消息对象
   * @returns
   */
  async getHelp(e: Messagetype): Promise<boolean> {
    const HelpData = Config.getJson('help')
    const PData = Config.getJsonPath('package', process.cwd().replace(/\\/g, '/'))
    const data = {
      body: HelpData,
      name: PData['name'],
      version: PData['dependencies']['hanhan']
    }
    const img = await obtainingImages('help', 'help', data)
    if (img) e.reply(img)
    return false
  }
}
