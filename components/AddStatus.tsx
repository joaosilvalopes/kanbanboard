import React, { FC, useState } from "react"
import { useRecoilState } from "recoil"
import statusesState from "@state/statusesState"

const AddStatus: FC = () => {
    const [adding, setAdding] = useState(false)
    const [_, setStatuses] = useRecoilState(statusesState)
    const [status, setStatus] = useState("")

    const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) =>
        setStatus(e.target.value)
    const addStatus = () => {
        setStatuses((prev) => [...prev, status])
        setAdding(false)
        setStatus("")
    }
    const toggleAdding = () => setAdding((prevAdding) => !prevAdding)

    return adding ? (
        <>
            <input type="text" value={status} onChange={changeStatus}></input>
            <button onClick={addStatus}>Add</button>
            <button onClick={toggleAdding}>X</button>
        </>
    ) : (
        <button onClick={toggleAdding}>+ Add another status</button>
    )
}

export default AddStatus
