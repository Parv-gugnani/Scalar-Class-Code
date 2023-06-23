module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    let count = 0;
    for (let i = 1; i <= A; i++) {
      if (A % i === 0) {
        count++;
      }
    }
    return count;
  },
};
