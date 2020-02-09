export const resolveValueByPath = (obj, path) => {
  let current = obj;
  path.split(".").forEach(p => {
    current = current ? current[p] : undefined;
  });
  return current;
};
