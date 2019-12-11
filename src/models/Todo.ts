
export default interface ITodo {
  id: string
  status: 'planned'|'inProgress'|'finished',
  title: string,
  elapsed: number,
  active?: number
}