//  Example #01
const student = {
    Name: 'Monica',
    Class: 7,
    Age: 12
}
//Using for in loop method
for(let key in student){
    //Display Properties
    console.log(`${key} : ${student[key]}`);
}


//  Example #02
function Mobile(model_no){
    this.model = model_no;
    this.color = 'White';
    this.ram = '4GB';
    this.price = function(){
        console.log(this.model + 'Price TK 3000 <br>')
    };
}
var samsung = new Mobile ('Galaxy');
var nokia = new Mobile ('3310')

for (var specs in nokia){
    if(typeof nokia[specs] !== 'function'){
        console.log(specs + '' + nokia[specs]);

        //Only Keys Show
        console.log(Object.keys(nokia));
    }
    
}












