import { atom, useRecoilValue, useSetRecoilState } from "recoil"

const statusesState = atom({
    key: "statusesState",
    default: ["todo", "done"],
})

export const useAddStatus = () => {
    const setStatuses = useSetRecoilState(statusesState);

    return (status: string) => setStatuses((prev) => [...prev, status]);
};

export const useStatuses = () => useRecoilValue(statusesState);