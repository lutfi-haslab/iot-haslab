import {atomWithStorage} from 'jotai/utils'

const user = atomWithStorage('username','');

export {
    user
}
