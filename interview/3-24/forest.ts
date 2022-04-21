function getJson(): Object[] {
  // 这里假设得到的数据全部符合规范
  return [
    { id: 1, name: '”开发部”', parentId: 0 },
    { id: 2, name: '部门1', parentId: 1 },
    { id: 3, name: '部门2', parentId: 1 },
    { id: 4, name: '部门3', parentId: 3 },
    { id: 5, name: '部门4', parentId: 4 },
  ];
}

/**
 * 将接受到的json转化成森林
*/
function convertForest(deps: Object[]) {
  const result: Object[] = [];
  const depMap: Map<number, Object> = new Map();

  // 将扁平数据类型先转化成Map
  for (const item of deps) {
    if (item.hasOwnProperty('id')) {
      depMap[item['id'] as number] = { ...item, children: [] }
    } else {
      continue;
    }

  }

  for (const item of deps) {

    const id: number = item['id'] as number;
    const parentId = item['parentId'] as number;
    const treeItem: Object = depMap[id];
    if (parentId === 0) {
      result.push(treeItem);
    } else {
      if (!depMap[parentId]) {
        depMap[parentId] = {
          children: [],
        }
      }
      depMap[parentId].children.push(treeItem)
    }

  }
  return result;
}

interface ForestRender {
  render(forest: Object[]): void;
}

class ConsoleRender implements ForestRender {

  private static instance: ForestRender;

  private constructor() { }

  /**
     * 
     * @returns The Singleton instance.
     */
  public static getInstance(): ForestRender {
    if (!this.instance) {
      ConsoleRender.instance = new ConsoleRender();
    }

    return ConsoleRender.instance;
  }

  public render(forest: Object[]) {
    let separator: string = '  ';
    function rec(deps: Object[], separator: string) {

      for (const iterator of deps) {
        console.log(separator + iterator['name']);
        if (iterator['children']) {
          rec(iterator['children'], separator + '  ')
        }
      }
    }

    for (const iterator of forest) {
      rec(iterator['children'], separator)
    }
  }

}

ConsoleRender.getInstance().render(convertForest(getJson()));
