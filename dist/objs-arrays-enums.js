"use strict";
{
    let Role;
    (function (Role) {
        Role[Role["ADMIN"] = 0] = "ADMIN";
        Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
        Role[Role["AUTHOR"] = 2] = "AUTHOR";
    })(Role || (Role = {}));
    const person = {
        name: "taisei",
        age: 25,
        hobbies: ["Sports", "Cooking"],
        role: Role.ADMIN,
    };
    console.log(person);
    for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase());
    }
    if (person.role === Role.ADMIN) {
        console.log("管理者ユーザ");
    }
}
//# sourceMappingURL=objs-arrays-enums.js.map