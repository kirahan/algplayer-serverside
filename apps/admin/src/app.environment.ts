// 获取开发环境信息

export const environment = process.env.NODE_ENV
export const isDev = Object.is(environment,'development')
export const isPro = Object.is(environment,'production')
export const isTest = Object.is(environment,'test')

export default{
    isDev,
    isPro,
    isTest,
    environment
}