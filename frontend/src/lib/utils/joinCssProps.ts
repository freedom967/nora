export function joinProps<T extends string|undefined>(...args: T[]){
    let arr = [...args].filter((item)=>typeof item==='string');
    return arr.join(" ");
}