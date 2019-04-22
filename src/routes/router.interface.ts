interface IRouterMeta {
  title: string
}

export default interface IRouter {
  path: string
  name: string
  icon?: string
  permission?: string
  meta?: IRouterMeta
  component: any
  children?: IRouter[]
}
