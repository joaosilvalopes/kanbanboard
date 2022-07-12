import React, { createRef, FC, useState } from "react"
import { useAddCard } from "@store/cards"

type Props = {
    status: string
}

const AddCard: FC<Props> = ({ status }) => {
    const [adding, setAdding] = useState(false)
    const inputRef = createRef<HTMLInputElement>()
    const addCard = useAddCard()

    const closeForm = () => setAdding(false)
    const openForm = () => setAdding(true)

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        addCard(status, inputRef.current?.value || "")
        closeForm()
    }

    return adding ? (
        <form onSubmit={handleFormSubmit}>
            <input type="text" ref={inputRef}></input>
            <button type="submit">Add</button>
            <button onClick={closeForm}>X</button>
        </form>
    ) : (
        <button onClick={openForm}>+ Add card</button>
    )
}

export default AddCard
