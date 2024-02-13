export interface IRequest {
    requestId: string,
    raisedBy: string,
    raisedTo: string,
    operationType: string,
    operationTime: Date,
    active: number
}