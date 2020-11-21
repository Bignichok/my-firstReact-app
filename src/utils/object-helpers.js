export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
  return items.map((item) =>
    item[objPropName] === itemId ? { ...item, ...newObjProps } : item
  );
};
