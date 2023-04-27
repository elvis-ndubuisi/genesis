import { User, UserModel } from "../../models/cryptoket.models";

export function createUserService(payload: Partial<User>) {
    /* Ignore checkPassword in Model with Partial */
    return UserModel.create(payload);
}

export function findUserByNameService(payload: string) {
    return UserModel.findOne({ username: payload });
}

export function loginUserService(payload: Required<User>) {
    return "strong";
}
