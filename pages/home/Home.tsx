import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import React, { FormEvent, useState, createRef } from "react"

import { useStatuses } from "store/statuses"
import { useSetCardsQuery } from "@store/cardsQuery"
import AddStatus from "@components/AddStatus"
import Status from "@components/Status"

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
    const searchInputRef = createRef<HTMLInputElement>()

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setCardsQuery(searchInputRef.current?.value || "")
    }

    return (
        <Main>
            <Nav>
                <form onSubmit={handleFormSubmit}>
                    <Input type="text" ref={searchInputRef} />
                    <Button type="submit">search</Button>
                </form>
            </Nav>
            <Board>
                {statuses.map((status) => (
                    <Status key={status} name={status} />
                ))}
                <AddStatus />
            </Board>
        </Main>
    )
}

export default Home
