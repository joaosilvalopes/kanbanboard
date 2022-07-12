import React, { FC, useState } from "react"
import { useAddCard } from "@store/cards"

type Props = {
    status: string
}

const AddCard: FC<Props> = ({ status }) => {
    const [adding, setAdding] = useState(false)
    const [card, setCard] = useState("")

    const addCard = useAddCard(status)

    const changeCard = (e: React.ChangeEvent<HTMLInputElement>) =>
        setCard(e.currentTarget.value)

    const _addCard = () => {
        addCard(card)
        setAdding(false)
        setCard("")
    }

    const toggleAdding = () => setAdding((prevAdding) => !prevAdding)

    return adding ? (
        <>
            <input type="text" value={card} onChange={changeCard}></input>
            <button onClick={_addCard}>Add</button>
            <button onClick={toggleAdding}>X</button>
        </>
    ) : (
        <button onClick={toggleAdding}>+ Add card</button>
    )
}

export default AddCard
