type Test = {
    "msg": string
}

type User = {
    "id": int,
    "fullname": string,
}

type BaseCode = {
    "id": int,
    "title": string,
    "subId": int,
    "access": boolean,
    "praise": bigint,
    "links": string[],
}

type Practical = BaseCode & {

}

type Project = BaseCode & {
    "description": string,
    "techStack": string[],
}
