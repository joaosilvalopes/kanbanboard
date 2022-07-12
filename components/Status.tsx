import { FC } from "react"
import styled from "styled-components"

import AddCard from "@components/AddCard"
import Card from "@components/Card"

import { useCardsQuery } from "@store/cardsQuery"
import { useCards } from "@store/cards"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 272px;
`

const Div = styled.div``

type Props = { status: string }

const Status: FC<Props> = ({ status }) => {
    const cardsQuery = useCardsQuery()
    const cards = useCards(status)
    const queriedCards = cards.filter((card) => card.includes(cardsQuery))

    return (
        <Wrapper>
            <Div>{status}</Div>
            {queriedCards.map((card) => (
                <Card key={card} card={card} status={status} />
            ))}
            <AddCard status={status} />
        </Wrapper>
    )
}

export default Status
