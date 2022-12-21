export function removeElement(list: any[], element: any) {
  if (!list.includes(element)) {
    return list;
  }

  let newList = list;
  const elemetIndex = list.indexOf(element);
  newList.splice(elemetIndex, 1);
  return newList.map((element) => element);
}
