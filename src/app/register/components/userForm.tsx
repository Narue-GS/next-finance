"use client"
import { useContext, useState } from "react"

import { IUser } from "@/app/types"
import { isUserValid } from "../utils/validations"
import { UserContext } from "@/app/hooks/useUser"

import  style  from "../styles/form.module.css"

export const UserForm = () => {
  const useUser = useContext(UserContext)

  const [userData, setuserData] = useState<IUser>({
    name:"",
    email: "",
    password: ""
  })

  const hendleName = (e:any) => {
    setuserData({
      ...userData,
        name: e.target.value
    })
  }

  const hendleEmail = (e:any) => {
    setuserData({
      ...userData,
        email: e.target.value
    })
  }

  const hendlePassword = (e:any) => {
    setuserData({
      ...userData,
        password: e.target.value
    })
  }

  const userRegister = async (user:IUser) => {
    if(!isUserValid) return false
    try {
      const searchUser:Response = await fetch("/api/user/newUser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      });
      const { response } = await searchUser.json()
      console.log(response);
      if(response) useUser?.switchUser(userData)
      
    } catch (e) {
        return e;
    }
}
  return(
    <section className="container">
      <div className="box" id={style.userRegisterForm}>
        <div className={style.formBox}>
          <input type="text" placeholder="Name" onChange={hendleName}/>
          <input type="text" placeholder="Email" onChange={hendleEmail}/>
          <input type="text" placeholder="Password" onChange={hendlePassword}/>
        </div>
        <div className={style.formMenu}>
          <button className="confirm" onClick={() => userRegister(userData)}>
            confirm
          </button>
        </div>
      </div>
    </section>
  )
}