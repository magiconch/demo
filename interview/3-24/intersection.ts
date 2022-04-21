const arr1 = [1,2,3,4,5];
const arr2 = [4,5,6,7,8];

function intersection(arr1: number[], arr2: number[]) {
  const a1: Set<number> = new Set(arr1);

  const a2: Set<number> = new Set(arr2);

  return Array.from(
    new Set([...a1]
      .filter(x => a2.has(x)))
    );
}