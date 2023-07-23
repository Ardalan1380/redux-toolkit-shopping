const shorthen2 = (str = "", len) => {
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  };

const shorthen = (title) => {
    const splitedTitle = title.split(' ');
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
}

const isInCart = (state , id) => {
    const result = !!state.selectedItems.find(item => item.id === id);
    return result;
}

const quantityCount = (state , id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {
        return false;
    }else {
        return state.selectedItems[index].quantity;
    }
}

export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);
    return ["all", ...new Set(unique)];
  };
  
  
export {quantityCount , isInCart , shorthen , shorthen2};