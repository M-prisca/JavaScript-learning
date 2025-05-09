function reverseString(rev){
    var reversed="";
    for(var i = rev.length - 1; i>=0;i--)
        {
            reversed += rev[i];

        }
        return reversed;
}
console.log(reverseString("Prisca"));
