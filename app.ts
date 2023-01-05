// Objectを作成する際は型を明示的に指定するよりも推論させる方がよう冗長にならないので良い
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "taisei",
//   age: 25,
// };

{
  const person = {
    name: "taisei",
    age: 25,
    hobbies: ["Sports", "Cooking"],
  };

  let favoriteActivities: string[];
  favoriteActivities = ["Sports"];

  console.log(person);

  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
  }
}
