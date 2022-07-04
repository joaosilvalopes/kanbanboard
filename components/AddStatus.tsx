import React, { FC, useState } from "react"
import { useAddStatus } from "@store/statuses"

const AddStatus: FC = () => {
    const [adding, setAdding] = useState(false)
    const [status, setStatus] = useState("")

    const addStatus = useAddStatus()

    const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) =>
        setStatus(e.target.value)

    const add = () => {
        addStatus(status)
        setAdding(false)
        setStatus("")
    }

    const toggleAdding = () => setAdding((prevAdding) => !prevAdding)

    return adding ? (
        <>
            <input type="text" value={status} onChange={changeStatus}></input>
            <button onClick={add}>Add Status</button>
            <button onClick={toggleAdding}>X</button>
        </>
    ) : (
        <button onClick={toggleAdding}>+ Add status</button>
    )
}

export default AddStatus
