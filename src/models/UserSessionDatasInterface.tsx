export interface UserSessionDatasInterface {
    userId: number,
    sessions: [SessionInterface]
}

export interface SessionInterface {
    day: number,
    sessionLength: number
}