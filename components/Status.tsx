import { FC } from "react"
import styled from "styled-components"

import AddCard from "@components/AddCard"
import { useCards } from "@store/cards"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 272px;
`

const Name = styled.div``

type Props = { name: string }

const Status: FC<Props> = ({ name }) => {
    const cards = useCards(name)

    return (
        <Wrapper>
            <Name>{name}</Name>
            {cards.map((card) => (
                <div key={card}>{card}</div>
            ))}
            <AddCard status={name} />
        </Wrapper>
    )
}

export default Status
