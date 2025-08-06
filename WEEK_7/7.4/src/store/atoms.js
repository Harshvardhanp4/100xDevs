import { atom ,  selector} from "recoil";

export const networkAtom = atom({
    key:"networkAtom",
    default: 104
});


export const jobAtom = atom({
    key:"jobAtom",
    default: 0
});

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
})

export const messagingAtom = atom({
    key: "messageAtom",
    default: 0
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) =>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);

        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
    }
})