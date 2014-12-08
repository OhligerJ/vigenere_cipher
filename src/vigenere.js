var vigenere = {};

vigenere.repeat = function(keyword, length){
  var mod = keyword.length;
  var arr = keyword.split('');
  ret_str = '';
  for (var i = 0; i < length; i++){
    ret_str += ( arr[i % mod]);
  }
  return ret_str;
};

vigenere.encode = function(message, keyword) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var cipher_str = vigenere.repeat(keyword, message.length); //lemonlemonle
  var ret_str = '';

  for (var i = 0; i < message.length; i++){
    ret_str = ret_str.concat( alphabet[ (alphabet.indexOf(message[i]) + (alphabet.indexOf(cipher_str[i]))) % 26 ] );
  }
  return ret_str;
};

console.log(vigenere.encode('attackatdawn', 'lemon'));

// vigenere.decode = function(message, keyword) {
// }