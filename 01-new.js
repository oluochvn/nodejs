const person = {
    name: 'vincent',
    age: 23,
    gender: 'male',
    fullName: function(){
        return this.name + this.gender;
    },
    ageGender: function(){
  return this.age + this.gender;
}
};


console.log(person.fullName())
console.log(person.ageGender())

    class car {
        constructor(cname,cmodel){
            this.cname = cname;
            this.cmodel = cmodel;
        }

        carname(){
            return(`${this.cname} and ${this.cmodel}`);
        }
    }
    const car1 = new car('porse',22);
    console.log(car1)

    const car2 = new car('toyota',29)
    console.log(car2)

    