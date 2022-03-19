function DeepClone(value) {
    if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj)
        return obj;

    if (obj instanceof Date)
        var temp = new Date(obj);
    else
        var temp = obj.constructor();
    for (let key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = DeepClone(obj[key]);
            delete obj['isActiveClone'];
        }
    }
    return temp;
}