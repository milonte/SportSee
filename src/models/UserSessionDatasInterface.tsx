export interface UserSessionDatasInterface {
    userId: number,
    sessions: [
        {
            day: number,
            sessionLength: number
        }
    ]
}

export interface FormatedSessionDatasInterface {
    userId: number,
    sessions: SessionInterface[]
}

export interface SessionInterface {
    day: string,
    sessionLength: number
}