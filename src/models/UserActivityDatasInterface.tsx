export interface UserActivityDatasInterface {
    userId: number,
    sessions: ActivityInterface
}

export interface ActivityInterface {
    day: Date,
    kilogram: number,
    calories: number
}