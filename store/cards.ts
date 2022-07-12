import { atom, useRecoilValue, useSetRecoilState } from "recoil"
import Swal from "sweetalert2"

const defaultState: {
    error?: string,
    value: {
        [key: string]: string[]
    }
} = {
    error: undefined,
    value: {}
}

const cardsState = atom({
    key: "cardsState",
    default: defaultState,
    effects: [({ onSet }) => onSet(({ error }) => error && Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'OK'
    }))]
})

export const useAddCard = () => {
    const setCards = useSetRecoilState(cardsState)

    return (status: string, card: string) => setCards((prev) => {
        const cards = prev.value[status] || [];

        if(card === "") {
            return { error: 'Invalid Card: Empty Value', value: prev.value  }
        }
        if(cards.includes(card)) {
            return { error: 'Invalid Card: Repeated Value', value: prev.value  }
        }

        return { error: undefined, value: { ...prev.value, [status]: [...cards, card] }};
    });
}

export const useCards = (status: string) =>
    (useRecoilValue(cardsState).value[status] || [])

export const useEditCard = () => {
    const setCards = useSetRecoilState(cardsState)

    return (status: string, oldCard: string, newCard: string) => setCards((prev) => {
        const cards = prev.value[status] || [];

        if(newCard === "") {
            return { error: 'Invalid Card: Empty Value', value: prev.value  }
        }
        if(cards.filter((card) => card === oldCard).includes(newCard)) {
            return { error: 'Invalid Card: Repeated Value', value: prev.value  }
        }

        return {
            error: undefined,
            value: {  ...prev.value, [status]: cards.map((card) => card === oldCard ? newCard : card) }
        }
    });
}
