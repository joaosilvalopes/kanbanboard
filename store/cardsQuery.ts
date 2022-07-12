import { atom, useRecoilValue, useSetRecoilState } from "recoil"
import { useCards } from "@store/cards";

const defaultState: string = "";

const cardsQueryState = atom({
    key: "cardsQueryState",
    default: defaultState
})

export const useSetCardsQuery = () => useSetRecoilState(cardsQueryState);

export const useCardsQueryResult = (status: string) => {
    const query = useRecoilValue(cardsQueryState)
    const cards = useCards(status)

    return cards.filter((card) => card.includes(query))
}
