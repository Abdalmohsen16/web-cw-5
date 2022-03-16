alert('abdalmohsen')
console.log(16)
console.log('%c انا في الصف الحادي عشر' , 'color: green')

// جافاسكربت ليست جافا

let budget = 20

console.log(budget > 30 && budget < 80)

budget += 30

console.log(budget > 30 && budget < 80)

let grade = prompt('Enter your grade');

if(grade >= 90){
    console.log('لقد حصلت على امتياز 🥳')
} else if(grade >= 80){
    console.log('لقد حصلت على جيد جداً🤩')
} else if(grade >= 70){
    console.log('لقد حصلت على جيد🙂')
} else if(grade >= 60){
    console.log('لقد حصلت على مقبول😕')
} else if(grade >= 50){
    console.log('لقد حصلت على ضعيف☹️')
} else {
    console.log('"راسب💔')
}

let grade1 = prompt("Enter your grade");
switch (true) {
    case (grade1 >= 90):
        console.log('لقد حصلت على امتياز 🥳');
        break;
    case (grade1 >= 80):
        console.log('لقد حصلت على جيد جداً🤩');
        break;
    case (grade1 >= 70):
        console.log('لقد حصلت على جيد🙂');
        break;
    case (grade1 >= 60):
        console.log('لقد حصلت على مقبول😕')
        break;
    case (grade1 >= 50):
        console.log('لقد حصلت على ضعيف☹️')
        break;
    default:
        console.log('"راسب💔');
        break;
}