function isPangram(string){
  let matcher = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let lowerStrArr = string.toLowerCase().split('')

  for(let i = 0; i < matcher.length; i++) {
    if(lowerStrArr.indexOf(matcher[i]) === -1) return false
  }
  return true
}
