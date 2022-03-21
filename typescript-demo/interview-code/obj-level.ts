/**
 * 找出obj最深的节点
 * @param obj 
 * @returns 
 */

function getObjectLevel(obj: object): number {
    if (typeof obj != 'object' || obj === null) {
        return 0;
    }

    function helpfunc(obj: object): number {
        let level: number = 1;
        if (typeof obj != 'object' || obj === null) {
            return level;
        }

        let maxList: number[] = [];
    
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                if (typeof element == 'object') {
                    maxList.push(helpfunc(element));
                }
            }
        }

        const count = maxList.length === 0 ? 0 : Math.max(...maxList);
        
        return level + count;
    }

    return helpfunc(obj);

}

const case1 = {
    a: {
        b: {
            c: 3
        },
        d: {}
    }
}

console.log(getObjectLevel(case1));

