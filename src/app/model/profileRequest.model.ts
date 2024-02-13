import { IRequest } from "./Irequest.model";
import { IUser } from "./user.model";

export interface IProfileRequest{
    user:IUser,
    Request:IRequest
}