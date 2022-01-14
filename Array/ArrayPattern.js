function pattern() {
    
    var output = '';
    for (var i = 1; i <= 5; i++) {
        for (var j = 5; j >= i; j--) {
            output += i + '  ';
        }
        console.log(output);
        output = '';
    }
}
pattern();




