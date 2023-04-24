import { User, UserModel } from "../../models/cryptoket.models";

export function createUser(payload: Partial<User>) {
    /* Ignore checkPassword in Model with Partial */
    return UserModel.create(payload);
}

export function findUserByName(payload: string) {
    return UserModel.findOne({ username: payload });
}

export function loginUser(payload: Required<User>) {
    return "strong";
}
