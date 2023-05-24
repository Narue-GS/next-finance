import { IUser } from "@/app/types";

export function isUserValid(user:IUser) {
  if(!user){
    return false
  } else {
    if(user.email && user.name && user.password) return true
    else return false
  }
}