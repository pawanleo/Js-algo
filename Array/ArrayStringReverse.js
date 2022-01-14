function reverse(string){
    var words = string.split(' ');
    var result = [];
    for(var i = 0; i < words.length; i ++){
      result.push(words[i].split('').reverse().join(''));
    }  
    return result.join(' ');
 }
 
 console.log(reverse('Hello welcome to the World'));