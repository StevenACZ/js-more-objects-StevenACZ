function likes(names) {
  const [name_1, name_2, name_3, ...rest] = names;
  
  switch(names.length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return `${name_1} likes this`;
      break;
    case 2:
      return `${name_1} and ${name_2} like this`;
      break;
    case 3:
      return `${name_1}, ${name_2} and ${name_3} like this`;
      break;
    default:
      return `${name_1}, ${name_2} and ${ [name_3, ...rest].length } others like this`;
      break;
  }
}