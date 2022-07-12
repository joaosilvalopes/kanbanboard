import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import React, { FormEvent } from "react"

import AddStatus from "@components/AddStatus"
import Status from "@components/Status"

import { useStatuses } from "store/statuses"
import { useSetCardsQuery } from "@store/cardsQuery"

const Main = styled.main`
    display: flex;
    flex-direction: column;
`

const Nav = styled.nav`
    width: 100%;
`

const Input = styled.input``

const Button = styled.button``

const Board = styled.div`
    display: flex;
`

const Home: NextPage = () => {
    const setCardsQuery = useSetCardsQuery()
    const statuses = useStatuses()

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setCardsQuery(new FormData(e.currentTarget).get("cardsQuery") as string)
    }

    return (
        <Main>
            <Nav>
                <form onSubmit={handleFormSubmit}>
                    <Input type="text" name="cardsQuery" />
                    <Button type="submit">search</Button>
                </form>
            </Nav>
            <Board>
                {statuses.map((status) => (
                    <Status key={status} status={status} />
                ))}
                <AddStatus />
            </Board>
        </Main>
    )
}

export default Home
