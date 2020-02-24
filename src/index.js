
// You should implement your task here.

module.exports = function towelSort (matrix) {  
  if (typeof matrix !== "undefined" && matrix !== []) {
    let arr = [];
    matrix.forEach((item, index) => {
      if(index %2) {
        item.reverse();
        arr.push(...item);
      } else {
        arr.push(...item);
      };
    });
    return arr;
  } else {
    return [];
  };  
};
