import React, { FC, FormEvent, useState } from "react"

import { useEditCard } from "@store/cards"

type Props = {
    card: string
    status: string
}

const Card: FC<Props> = ({ card, status }) => {
    const [editing, setEditing] = useState(false)
    const editCard = useEditCard()

    const openForm = () => setEditing(true)
    const closeForm = () => setEditing(false)

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newCard = new FormData(e.currentTarget).get("newCard") as string

        editCard(status, card, newCard)

        closeForm()
    }

    return editing ? (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="newCard" defaultValue={card}></input>
            <button type="submit">save</button>
            <button onClick={closeForm}>X</button>
        </form>
    ) : (
        <div>
            {card}
            <button onClick={openForm}>edit</button>
        </div>
    )
}

export default Card
