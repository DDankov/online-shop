import {allNavi} from './allNavi';

export const getNav = (role) => {
    const finalNavs = []

    for (let i = 0; i < allNavi.length; i++) {
       if (role === allNavi[i].role) {
         finalNavs.push(allNavi[i])
       } 
    }
    return finalNavs

}