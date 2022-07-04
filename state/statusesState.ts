import { atom } from "recoil"

export default atom({
    key: "statusesState",
    default: ["todo", "done"],
})
