
/**
     * 生成唯一不重复的编码
     * @param {string} begin //前缀
     */
export function getOnlycode(begin) {
  const code = new Date().valueOf()
  return `${begin}_${code}`
}
