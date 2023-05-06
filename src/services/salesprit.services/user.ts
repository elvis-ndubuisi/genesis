import { SalesUser, SalesUserModel } from "../../models/salesprit.models";

export function createUserService(user: Partial<SalesUser>) {
    return SalesUserModel.create(user);
}
