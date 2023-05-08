import { SalesUser, SalesUserModel } from "../../models/salesprit.models";

export function createUserService(user: Partial<SalesUser>) {
    return SalesUserModel.create(user);
}

export function findUserByIdService(userId: string) {
    return SalesUserModel.findById(userId);
}

export function updateUserService({ userId, payload }: { userId: string; payload: Partial<SalesUser> }) {
    return SalesUserModel.findByIdAndUpdate(userId, payload);
}

export function findUserByEmailService(email: string) {
    return SalesUserModel.findOne({ email });
}
