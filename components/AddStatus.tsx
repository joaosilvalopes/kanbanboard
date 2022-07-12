import React, { FC, FormEvent, useState } from "react"

import { useAddStatus } from "@store/statuses"

const AddStatus: FC = () => {
    const [adding, setAdding] = useState(false)

    const addStatus = useAddStatus()

    const openForm = () => setAdding(true)
    const closeForm = () => setAdding(false)

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const status = new FormData(e.currentTarget).get("status") as string

        addStatus(status)
        closeForm()
    }

    return adding ? (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="status"></input>
            <button type="submit">Add Status</button>
            <button onClick={closeForm}>X</button>
        </form>
    ) : (
        <button onClick={openForm}>+ Add status</button>
    )
}

export default AddStatus
