export default function updateUniqueItems(input){
    if(!(input instanceof Map)){
        throw new Error("Cannot process");
    }
    input.forEach((value, key) => {
        if (value === 1){
            input.set(key, 100);
        }
    });

    return input;
}