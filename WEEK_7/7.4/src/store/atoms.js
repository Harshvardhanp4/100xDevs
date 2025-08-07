// import { atom ,  selector} from "recoil";

// export const networkAtom = atom({
//     key:"networkAtom",
//     default: 104
// });


// export const jobAtom = atom({
//     key:"jobAtom",
//     default: 0
// });

// export const notificationAtom = atom({
//     key: "notificationAtom",
//     default: 12
// })

// export const messagingAtom = atom({
//     key: "messageAtom",
//     default: 0
// })

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get}) =>{
//         const networkAtomCount = get(networkAtom);
//         const jobsAtomCount = get(jobAtom);
//         const notificationsAtomCount = get(notificationsAtom);
//         const messagingAtomCount = get(messagingAtom);

//         return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
//     }
// })

import { atom,  selector} from 'recoil'

export const notifications= atom({
    key: "notificationsAtom",
    default: {
        network: 0, 
        jobs: 0, 
        messaging: 0, 
        notifications: 0
    }
});

export const totalNotificationSelector  =  selector({
    key:"otalNotificationSelector",
    get: ({get})=>{
        const allNotifications = get(notifications);
        return allNotifications.network +
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})
