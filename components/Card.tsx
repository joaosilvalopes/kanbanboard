import { useEditCard } from "@store/cards"
import React, { createRef, FC, useState } from "react"

type Props = {
    name: string
    status: string
}

const Card: FC<Props> = ({ name, status }) => {
    const [editing, setEditing] = useState(false)
    const inputRef = createRef<HTMLInputElement>()
    const editCard = useEditCard()

    const openForm = () => setEditing(true)
    const closeForm = () => setEditing(false)

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newName = inputRef.current?.value || ""

        editCard(status, name, newName)

        closeForm()
    }

    return editing ? (
        <form onSubmit={handleFormSubmit}>
            <input type="text" ref={inputRef} defaultValue={name}></input>
            <button type="submit">save</button>
            <button onClick={closeForm}>X</button>
        </form>
    ) : (
        <div>
            {name}
            <button onClick={openForm}>edit</button>
        </div>
    )
}

export default Card
