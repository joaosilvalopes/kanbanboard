import { atom, useRecoilValue, useSetRecoilState } from "recoil"
import Swal from "sweetalert2"

const defaultState: { error?: string, value: string[] } = {
    error: undefined,
    value: ["todo", "done"]
};

const statusesState = atom({
    key: "statusesState",
    default: defaultState,
    effects: [({ onSet }) => onSet(({ error }) => error && Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'OK'
    }))]
})

export const useAddStatus = () => {
    const setStatuses = useSetRecoilState(statusesState)

    return (status: string) => setStatuses((prev) => {
        if(status === "") {
            return { error: 'Invalid Status: Empty Value', value: prev.value  }
        }
        if(prev.value.includes(status)) {
            return { error: 'Invalid Status: Repeated Value', value: prev.value  }
        }

        return { error: undefined, value: [...prev.value, status] };
    });
}

export const useStatuses = () => useRecoilValue(statusesState).value
