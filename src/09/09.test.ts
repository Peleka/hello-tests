
function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string,
    age: number
}

test("big test", () => {
    let user: UserType = {
        name: "Nik",
        age: 32
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    let superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})