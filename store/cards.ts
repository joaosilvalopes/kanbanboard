import { atom, useRecoilValue, useSetRecoilState } from "recoil"

const defaultValue: {
    [key: string]: string[]
} = {}

const cardsState = atom({
    key: "cardsState",
    default: defaultValue,
})

export const useAddCard = (status: string) => {
    const setCards = useSetRecoilState(cardsState)

    return (card: string) =>
        setCards((prev) => ({
            ...prev,
            [status]: [...(prev[status] || []), card],
        }))
}

export const useCards = (status: string) =>
    useRecoilValue(cardsState)[status] || []
