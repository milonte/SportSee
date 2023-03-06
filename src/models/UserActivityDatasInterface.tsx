export interface UserActivityDatasInterface {
    userId: number,
    sessions: {
        day: Date,
        kilogram: number,
        calories: number
    },
}