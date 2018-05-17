export const CHANGE_NAME = 'home/CHANGE_NAME';

export function changeName(name){
    return{
        type:CHANGE_NAME,
        name
    }
}