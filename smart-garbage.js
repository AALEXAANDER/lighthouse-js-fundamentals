const smartGarbage = function (trash, bins) {
  const trashType = Object.keys(bins);
  for (let i of trashType) {
    if (i === trash) {
    bins[i]++;
    }
}
return bins;
}