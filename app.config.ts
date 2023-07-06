import { dirname, basename } from "node:path";
import { fileURLToPath } from "url";

// 获取当前脚本文件的目录名
const __dirname = dirname(fileURLToPath(import.meta.url));

// 获取当前脚本文件的文件名（不包含目录名）
// 将获取到的目录名作为插件名（保存在一个导出的常量中）
// 插件名
export const AppName = basename(__dirname);

// 将获取到的目录路径进行斜杠替换（用正斜杠替换反斜杠），作为插件路径（保存在一个导出的常量中）
export const MyDirPath = __dirname.replace(/\\/g, "/");
