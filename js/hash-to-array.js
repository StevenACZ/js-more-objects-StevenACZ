function convertHashToArray(hash){
  let res = []
  
  for ( let key in hash ) {
    res.push([key, hash[key]])
  }

  return res.sort( (a, b) => a[0] > b[0] );
}