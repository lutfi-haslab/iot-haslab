import {
    atom
} from "jotai";

const router = atom({
    home : [{
        name: 'Dashboard',
        path: '/dashboard/ptkp'
    }],
    ptkp : [{
            name: 'Dashboard',
            path: '/dashboard/ptkp'
        }, {
            name: 'Event',
            path: '/dashboard/ptkp/event'
        },
        {
            name: 'Data',
            path: '/dashboard/ptkp/data'
        },
        {
            name: 'Logout',
            path: '/login'
        }
    ]
})

export {
    router
}