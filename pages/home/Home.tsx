import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"

import { useStatuses } from "store/statuses"
import AddStatus from "@components/AddStatus"
import Status from "@components/Status"

const Main = styled.main`
    display: flex;
`

const Home: NextPage = () => {
    const statuses = useStatuses()

    return (
        <Main>
            {statuses.map((status) => (
                <Status key={status} name={status} />
            ))}
            <AddStatus />
        </Main>
    )
}

export default Home
