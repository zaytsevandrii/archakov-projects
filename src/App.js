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
    console.log(data)

    return (
        <div className="App">
            <Users isLoading={isLoading} items={data} />
            {/* <Success /> */}
        </div>
    )
}

export default App
