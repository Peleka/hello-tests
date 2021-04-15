import {StudentType} from '../02/02'
import {GovernmentType} from '../02/02_02'

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (st: StudentType) => {
    st.isActive = true
}

export function doesStudentLiveIn(st: StudentType, city: string) {
    return st.address.city.title === city
}

export const addMoneyToBudget = (building: GovernmentType, money: number) => {

    building.budget += money
}