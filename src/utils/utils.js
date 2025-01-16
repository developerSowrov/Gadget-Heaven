const get = () => {
  const gadgets = localStorage.getItem("favorites");
  if (gadgets) {
    const data = JSON.parse(gadgets);
    return data;
  } else {
    return [];
  }
};

export const add = (gadget) => {
  const favorites = get();
  favorites.push(gadget);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
