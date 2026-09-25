//================ usual and easiest object creation ================

let student = [
    {
        name: "John Doe",
        age: 30,
        address: "123 Main St",
        marks: [
            {
                subject: "Science",
                score: 85
            },
            {
                subject: "Mathematics",
                score: 80
            }
        ]
    },
    {
        name: "Jane Smith",
        age:25,
        address: "456 Oak Ave"
    },
    {
        name:"Alice Johnson",
        age: 28,
        address: "789 Elm St"
    }
]

console.log(student[0].marks[1].score);  //prints 80
console.log(student[0].marks[0].subject); //prints "Science"