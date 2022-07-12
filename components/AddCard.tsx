import React, { FC, FormEvent, useState } from "react"

import { useAddCard } from "@store/cards"

type Props = {
    status: string
}

const AddCard: FC<Props> = ({ status }) => {
    const [adding, setAdding] = useState(false)

    const addCard = useAddCard()

    const openForm = () => setAdding(true)
    const closeForm = () => setAdding(false)

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const card = new FormData(e.currentTarget).get("card") as string

        addCard(status, card)
        closeForm()
    }

    return adding ? (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="card"></input>
            <button type="submit">Add Card</button>
            <button onClick={closeForm}>X</button>
        </form>
    ) : (
        <button onClick={openForm}>+ Add card</button>
    )
}

export default AddCard
