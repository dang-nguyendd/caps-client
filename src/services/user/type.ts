export namespace UserNS {
    //generic
    type GenderType = 'male' | 'female' | 'other'
    type RoleType = string[]

    //request


    //response

    export type UserDetailResponse  = {
        "id": number,
        name: string,
        "gender": GenderType,
        "dob": string,
        "age": number,
        "email": string,
        "roles": RoleType
        "createdAt": string
    }
}