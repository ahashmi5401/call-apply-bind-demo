let student1 = {
    name:'M Ayan Hashmi',
    age:19,
    skills:['HTML','CSS','JS','Lenis','GSAP'],
    intro: function() {
        return {
            name: this.name,
            age: this.age,
            skills: this.skills
        };
    }
};

let user = student1.intro();
console.log(user);

let student2 = {
    name:'Muhammad',
    age:18,
    skills:['HTML','CSS']
}

let student2Data = student1.intro.call(student2);
console.log(`example of call =>`,  student2Data);


// call EXAMPLE
//aese bhi use karskte hain call ko btw
let students = {
    name:'M Ayan Hashmi',
    age:19,
    skills:['HTML','CSS','JS','Lenis','GSAP']
};

function  intro(username){
    return {
        name:this.name,
        age:this.age,
        skills:this.skills,
        github:username
    }
}
let exCall = intro.call(students,"ahashmi5401")
console.log(`Example of call =>`,exCall);


// APPLY 
// array kishkal mai jarahe hain 
let applyStudent ={
    name:'M Ayan Hashmi',
    age:19,
    skills:['HTML','CSS','JS','Lenis','GSAP']
}

function applyIntro(university,username){
    return{
        name:this.name,
        age:this.age,
        skills:this.skills,
        university:university,
        github:username
    }
}
let fullIntro = applyIntro.apply(students,['SSUET','ahashmi5401'])

console.log(`example of apply => `,fullIntro)

// bind 
//retern , name()=> call
let bindStudent ={
    name:'M Ayan Hashmi',
    age:19,
    skills:['HTML','CSS','JS','Lenis','GSAP']
}
function bindIntro(university,username){
    return{
        name:this.name,
        age:this.age,
        skills:this.skills,
        university:university,
        github:username
    }
}
let bind = bindIntro.bind(bindStudent,'SSUET','ahashmi5401') //soesnot accept array 
console.log(`example of bind `,bind())