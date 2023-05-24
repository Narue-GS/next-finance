export interface expense {
  title:string,
  value:number,
}

export interface receive {
  title:string,
  value:number,
  from_:string
}

export interface active {
  title:string,
  value:number
}

export interface IUser {
  name: string,
  email: string,
  password: string
}