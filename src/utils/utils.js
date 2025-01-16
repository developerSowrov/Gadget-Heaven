import toast from "react-hot-toast";

const get = () => {
  const gadgets = localStorage.getItem("favorites");
  if (gadgets) {
    const data = JSON.parse(gadgets);
    return data;
  } else {
    return [];
  }
};
const getWL = () => {
  const gadgets = localStorage.getItem("wishlist");
  if (gadgets) {
    const data = JSON.parse(gadgets);
    return data;
  } else {
    return [];
  }
};

const add = (gadget) => {
  const favorites = get();
  const exist = favorites.find((data) => data.product_id === gadget.product_id);
  if (exist) return toast.error("Item already exist");
  favorites.push(gadget);
  toast.success("Item added successfull in the Cart");
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
const addwl = (gadget) => {
  const wishlist = getWL();
  const exist = wishlist.find((data) => data.product_id === gadget.product_id);
  if (exist) return toast.error("Item already exist");
  wishlist.push(gadget);
  toast.success("Item added successfull in the Wishlist");
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export { add, get, addwl, getWL };
