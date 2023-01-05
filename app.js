// Objectを作成する際は型を明示的に指定するよりも推論させる方がよう冗長にならないので良い
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "taisei",
//   age: 25,
// };
{
    var person = {
        name: "taisei",
        age: 25,
        hobbies: ["Sports", "Cooking"]
    };
    var favoriteActivities = void 0;
    favoriteActivities = ["Sports"];
    console.log(person);
    for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
        var hobby = _a[_i];
        console.log(hobby.toUpperCase());
    }
}
