import { FC } from "react"
import styled from "styled-components"

import AddCard from "@components/AddCard"
import Card from "@components/Card"
import { useCardsQueryResult } from "@store/cardsQuery"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 272px;
`

const Name = styled.div``

type Props = { name: string }

const Status: FC<Props> = ({ name }) => {
    const cards = useCardsQueryResult(name)

    return (
        <Wrapper>
            <Name>{name}</Name>
            {cards.map((card) => (
                <Card key={card} name={card} status={name} />
            ))}
            <AddCard status={name} />
        </Wrapper>
    )
}

export default Status
