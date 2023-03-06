export interface UserPerformanceDatasInterface {
    userId: number,
    kind: {
        1: string,
        2: string,
        3: string,
        4: string,
        5: string,
        6: string
    },
    data: {
        value: number,
        kind: number
    },
}