function DeepClone(obj) {
    if (typeof obj !== "object" || obj == null || 'isActiveClone' in obj) {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    let temp = obj.constructor();

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            obj['isActiveClone'] = null;
            temp[key] = DeepClone(element);
            delete obj['isActiveClone'];
        }
    }
    return temp;
}

function deepEqual(x, y) {
    if (x === y) {
        return true;
    }

    // 如果其中一个参数不是object
    if (!(typeof x == "object" && x != null && typeof y == "object" && y != null)) {
        return false;
    }

    // 比较对象内部
    if (Object.keys(x).length != Object.keys(y).length) {
        return false;
    }

    for (let prop in x) {
        if (y.hasOwnProperty(prop)) {
            if (!deepEqual(x[prop], y[prop])) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

function isSame(a, b) {
    if (Object.hasOwnProperty('is')) {
        return Object.is(a, b);
    }

    // polyfill

    if (a === b) {
        // 判断不存在 -0 === +0 的情况
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }

}


function shallowEqual(objA, objB) {

    // 对基本数据类型进行比较
    if (isSame(objA, objB)) {
        return true;
    }

    // 由于Obejct.is()可以对基本数据类型做一个精确的比较， 所以如果不等
    // 只有一种情况是误判的，那就是object,所以在判断两个对象都不是object
    // 之后，就可以返回false了
    if (typeof objA !== 'object' || objA === null ||
        typeof objB !== 'object' || objB === null) {
        return false;
    }


    // 比较key的长度
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);


    // 长度不等直接返回false
    if (keysA.length !== keysB.length) {
        return false;
    }


    // key相等的情况下，再去循环比较
    for (let k in keysA) {
        // key值相等的时候
        // 借用原型链上真正的 hasOwnProperty 方法，判断ObjB里面是否有A的key的key值
        // 属性的顺序不影响结果也就是{name:'daisy', age:'24'} 跟{age:'24'，name:'daisy' }是一样的
        // 最后，对对象的value进行一个基本数据类型的比较，返回结果
        if (!Object.hasOwnProperty.call(objB, k) ||
            !isSame(objA[k], objB[k])) {
            return false;
        }
    }

    return true;

}