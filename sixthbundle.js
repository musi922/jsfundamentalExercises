const person = [
    {firstname: "richard",lastname:"musime",salary:600000},
    {firstname: "pirlo",lastname:"musime",salary:700000},
    {firstname: "gang",lastname:"musime",salary:800000},
    {firstname: "rakitic",lastname:"musime",salary:900000},
    {firstname: "richardo",lastname:"musime",salary:600000},
    {firstname: "rich",lastname:"musime",salary:700000}
];

console.log(person.reduce((a,person) =>a+person.salary,0));


