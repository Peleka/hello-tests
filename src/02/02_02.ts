export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentType = {
    type: "HOSPITAL" | "FIRE_STATION"
    budget:number
    staffCount: number
    address: AddressType
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type LocalCityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentType>,
    citizensNumber: number
}