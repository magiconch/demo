const treeData = [
    { "name": "A-1" },
    { "name": "A-2" },
    { "name": "A-3" },
    {
        "name": "A-4",
        "sub": [
            { "name": "A-4-1" },
            { "name": "A-4-2" },
            {
                "name": "A-4-3",
                "sub": [
                    { "name": "A-4-3-1" },
                    { "name": "A-4-3-2" }
                ]
            }
        ]
    }
];

class TreeNode {


    constructor(value, level) {
        this._value = value;
        this._level = level;
        this._type = "div";
    }

    render() {
        const ele = document.createElement(this._type);
        let space = '';
        for (let index = 0; index < this._level; index++) {
            space += '&nbsp;&nbsp;&nbsp;&nbsp;';
        }
        ele.innerHTML = space + this._value;
        return ele;
    }
}

function drawElement(obj, level) {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            if (Array.isArray(element)) {
                level++;
                draw(element, level);
            } else {
                const ele = new TreeNode(element, level);
                document.body.append(ele.render());
            }
        }
    }
}

function draw(value, level) {
    for (const iterator of value) {
        drawElement(iterator, level);
    }
}

draw(treeData, 0);

