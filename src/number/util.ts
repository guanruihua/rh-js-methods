import { type } from '../util'
import { INFINITY, MAX_VALUES_NUMBER, MIN_VALUES_NUMBER } from '../constants'
import { isFloat } from './isFloat'

/**
 * @title spLength
 * @description 指定长度
 * @param value any
 * @param min = 0
 * @param max number
 * @returns string
 */
export function spLength(value: number | string, min = 0, max: number): string {
  if (!/^[0-9]*$/.test(String(value))) {
    return new Array(min).fill('0').join('')
  }

  const tmpValue: string = value.toString()
  const len = tmpValue.length

  if (len > max) {
    return tmpValue.slice(len - max)
  }

  if (len < min) {
    return new Array(min - len).fill('0').join('') + tmpValue
  }

  return tmpValue
}

/**
 * @title isEffectNumber
 * @description 是否为js的有效区间的数, 非number类型都为false
 * @param num any
 * @returns boolean
 */
export function isEffectNumber(num: any): boolean {
  if (type(num) === 'Number') {
    if (num === INFINITY || num === -INFINITY) return false
    return true
  }
  return false
}


/**
 * @title toNumber
 * @description 将值转换为Number, 不可以正确装换的值, 均返回0
 * @param value any 待转换的数值
 * @returns number
 */
export function toNumber(value: any): number {
  if (type(value) === 'Number') {
    if (value === INFINITY) return MAX_VALUES_NUMBER
    if (value === -INFINITY) return MIN_VALUES_NUMBER
    return value
  }
  const result = +value;
  if (type(result) === 'Number') {
    return result
  }
  return 0
}

/**
 * @title toFloat
 * @description 转换为指定位数的浮点数
 * @param num { number } 数字
 * @param fixed { number } 小数点位数
 * @returns { number }
 */
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export function toFloat(num: number, fixed: number = 1): number {
  return Number(num.toFixed(fixed))
}

/**
 * @title getDecimal
 * @description 获取小数点位数
 * @param num { number }
 * @returns { number=0 }
 */
export function getDecimal(num: number): number {
  if (!isFloat(num)) return 0
  return num.toString().split('.')[1].length
}
/**
 * @title clamp
 * @description 限制在lower和upper之间
 * @param num 待限制的值
 * @param lower 下限
 * @param upper 上限
 * @returns 返回被限制的值
 */
export function clamp(num: number, lower: number = -INFINITY, upper: number = INFINITY): number {
  if (num < lower) return lower
  if (num > upper) return upper
  return num
}



/**
 * @title inRange
 * @description 判断是否在该范围
 * @param num 要检查的值
 * @param start=0 开始范围
 * @param end 结束范围(包含该值)
 * @returns boolean
 */
export function inRange(num: number, start = 0, end: number = MAX_VALUES_NUMBER): boolean {
  if (end < start) return false
  if (num > end) return false
  if (num < start) return false
  return true
}

/**
 * @title between
 * @description 判断值是否在两值之间
 * @param num number 待判断值
 * @param start=0 起始值
 * @param end number 结束值(不包含该值)
 * @returns boolean
 */
export function between(num: number, start = 0, end: number = MAX_VALUES_NUMBER): boolean {
  if (end < start) return false
  if (num >= end) return false
  if (num < start) return false
  return true
}

/**
  * @title round
  * @description数字四舍五入，保留n位小数
  * @param number number 待处理数值
  * @param n number = 0 四舍五入的位数
  * @returns 
*/
export function round(number: number, n = 0): number {
  if (n <= 0) return Math.round(number)
  return Math.round(number * Math.pow(10, n)) / Math.pow(10, n)
}

/**
 * @title toThousands
 * @description 数字每千位加逗号
 * @param num string|number
 * @returns string
 */
export function toThousands(num: string | number): string {
  return num.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}
