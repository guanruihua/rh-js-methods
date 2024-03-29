import { random } from '../number'

/**
 * @title selects<T>
 * @description 指定范围 来随机选择数组元素
 * @param list: T[]
 * @param min: number 
 * @param max: number (包括)
 * @returns T[]
 */
export function selects<T>(list: T[], min: number, max: number): T[] {
  if (max > list.length) {
    max = list.length - 1
  }
  let len: number = random(min, max) || 0
  const result: T[] = []
  let index = 0
  while (len--) {
    index = ~~(Math.random() * list.length)
    result.push(list[index])
    list.splice(index, 1)
  }
  return result
}

/**
 * @title select<T>
 * @description 选择数组其中一项, 不指定就随机选一
 * @param list T[] 待选择数组
 * @param index ?number 指定选择索引(可为负数)
 * @returns T|null 选择项
 */
export function select<T>(list: T[] = [], index?: number): T | null {
  const len = list.length
  if (len === 0) return null

  if (!index && index !== 0) return list[~~(Math.random() * list.length)]
  if (index > len) return list[index % len]
  if (index > -1) return list[index]
  if (index < 0) return list[list.length + (index % len)]

  return null
}

