export interface UserSessionDatasInterface {
    userId: number,
    sessions: {
        day: number,
        sessionLength: number
    },
}