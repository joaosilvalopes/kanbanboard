import { FC } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 272px;
`

const Name = styled.div``

const AddCard = styled.button``

type Props = { name: string }

const Status: FC<Props> = ({ name }) => (
    <Wrapper>
        <Name>{name}</Name>
        <AddCard>+ Add Card</AddCard>
    </Wrapper>
)

export default Status
