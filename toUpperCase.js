function myFunction(){
    const str="Hi there.. my name is prisca, i'm a trainee at the gym, Rwanda's most intense software development trainee program.";
    let splitedStr=str.split(" ");
    for(let i=0; i<splitedStr.length; i++){
        splitedStr[i]=splitedStr[i].charAt(0).toUpperCase()+splitedStr[i].slice(1);
    };
    console.log(splitedStr.join(" "));
};
myFunction();