// lPaeesh le pemu mnxit ehess rtnisg! Oh, sorry, that was supposed to say: Please help me unmix these strings!

// Somehow these strings have all become mixed up. Help me undo this so I can understand my strings again.

// You will receive a string and must return the unmixed string.

//EXAMPLES:
// unmix("hTsii  s aimex dpus rtni.g") ➞ "This is a mixed up string."
// unmix("123456") ➞ "214365"

const unmix = str => {
  let splitted = str.split('')
  let newArr= []
  for (let i = 0; i < splitted.length; i = i+2) {
    newArr.push(splitted[i+1])
    newArr.push(splitted[i])
  }
  return newArr.join().replace(/[,]+/g, "")
};



module.exports = unmix;