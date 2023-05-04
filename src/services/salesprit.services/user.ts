import { User, UserModel } from "../../models/salesprit.models";

export function createUserService(user: Partial<User>) {
    return UserModel.create(user);
}
