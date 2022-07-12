import { atom, useRecoilValue, useSetRecoilState } from "recoil"

const defaultState: string = "";

const cardsQueryState = atom({
    key: "cardsQueryState",
    default: defaultState
})

export const useSetCardsQuery = () => useSetRecoilState(cardsQueryState);

export const useCardsQuery = () => useRecoilValue(cardsQueryState);
