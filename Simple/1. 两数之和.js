// 思路：求和转为求差，将差值存入map，遍历比较
const twoSum = (Arr, target) => {
  const map = new Map()
  for (let index = 0; index < Arr.length; index++) {
    const diff = target - Arr[index]
    if (map.has(diff)) {
      return [map.get(diff), index]
    }
    map.set(Arr[index], index)
  }
}