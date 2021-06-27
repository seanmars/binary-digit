interface WeekStruct {
  name: string,
  value: number
}

export const WeekData: Array<WeekStruct> = [
  {
    name: '周一',
    value: 1 << 6
  },
  {
    name: '周二',
    value: 1 << 5
  },
  {
    name: '周三',
    value: 1 << 4
  },
  {
    name: '周四',
    value: 1 << 3
  },
  {
    name: '周五',
    value: 1 << 2
  },
  {
    name: '周六',
    value: 1 << 1
  },
  {
    name: '周七',
    value: 1 << 0
  },
];

export const ReverseWeekData: Array<WeekStruct> = [
  {
    name: '周七',
    value: 1 << 6
  },
  {
    name: '周六',
    value: 1 << 5
  },
  {
    name: '周五',
    value: 1 << 4
  },
  {
    name: '周四',
    value: 1 << 3
  },
  {
    name: '周三',
    value: 1 << 2
  },
  {
    name: '周二',
    value: 1 << 1
  },
  {
    name: '周一',
    value: 1 << 0
  },
];