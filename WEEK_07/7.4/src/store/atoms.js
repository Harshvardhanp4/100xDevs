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


//-----------------------------------------------------------------------------------------------------------//
//async data queries atom// 

import axios from 'axios';
import { atom,  selector} from 'recoil'

export const notifications= atom({
    key: "notificationsAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async() =>{
            await new Promise(r=> setTimeout(r,2000))
            const res = await axios.get("http://localhost:3000/notifications")
            return res.data
        }
    })
});

export const totalNotificationSelector  =  selector({
    key:"TotalNotificationSelector",
    get: ({get})=>{
        const allNotifications = get(notifications);
        return allNotifications.network +
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})
