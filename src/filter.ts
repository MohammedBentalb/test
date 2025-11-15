export function filtering(arr: number[], num: number) {
  return [...arr.filter((a) => a != num)];
}

