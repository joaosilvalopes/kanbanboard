import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRecoilState } from "recoil"
import AddStatus from "../../components/AddStatus"

import statusesState from "../../state/statusesState"

const Home: NextPage = () => {
    const [statuses, setStatuses] = useRecoilState(statusesState)

    return (
        <main>
            {statuses.map((status) => status + " ")}
            <AddStatus />
        </main>
    )
}

export default Home
