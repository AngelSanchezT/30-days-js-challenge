export function removeDuplicates(values) {
    
    let onlyValues =new Set();

    values.forEach(item => {
        if(!onlyValues.has(item)) {
            onlyValues.add(item);
        }
    });

    return Array.from(onlyValues);
}
