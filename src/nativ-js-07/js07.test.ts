import {addFriends, calk, StudentType, sum} from './js07'

test('sum should be', () => {
    //1 тестовые данные
    //2 выполнение тестируемого кода
    //3 проверка ожидаемого рузельтата
    expect(sum(2, 3)).toBe(5)
})

test('calc', () => {

    expect(calk(2, 3, {type: 'mult'})).toBe(6)
    expect(calk(2, 3, {type: 'sub'})).toBe(-1)
    expect(calk(6, 3, {type: 'div'})).toBe(2)
    expect(calk(2, 3, {type: 'sum'})).toBe(5)
})

test('array names', () => {
    //data
  let  students = [
        {
            name: "Bob",
            isStudent: true
        },
        {
            name: "Alex",
            isStudent: true
        },
        {
            name: "Nick",
            isStudent: true
        }
    ];
    //result

   let studentsWithFriends =  addFriends(students)

    //проверка ожидаемого кода
    expect(studentsWithFriends.length).toBe(3)
    expect(studentsWithFriends[0].name).toBe("Bob")
    expect(studentsWithFriends[0].friends).toStrictEqual(["Alex", "Nick"])
})