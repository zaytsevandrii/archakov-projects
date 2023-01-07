import React from "react"
import "./index.scss"
import { Success } from "./components/Success"
import { Users } from "./components/Users"
import { useEffect } from "react"
import { useState } from "react"

// Тут список пользователей: https://reqres.in/api/users

function App() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [invites,setInvites] = useState([])
    useEffect(() => {
        setIsLoading(true)
        const getUsers = async () => {
            const res = await fetch("https://reqres.in/api/users")
            const { data } = await res.json()
            setData(data)
        }
        getUsers()
        setIsLoading(false)
    }, [])
    console.log(invites)
const onClickInvite = (id) =>{
  if(invites.includes(id)){
    setInvites(prev=>prev.filter(_id=>_id!==id))
  }else{
    setInvites(prev=>[...prev,id])
  }
}
    return (
        <div className="App">
            <Users isLoading={isLoading} items={data} onClickInvite={onClickInvite} invites={invites}/>
            {/* <Success /> */}
        </div>
    )
}

export default App
