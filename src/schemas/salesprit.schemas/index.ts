import {
    CreateProductInput,
    DeleteProductInput,
    EditProductInput,
    createProductSchema,
    deleteProductSchema,
    editProductSchema,
} from "./product";
import {
    EditUserProfileInput,
    LoginUserInput,
    RegisterUserInput,
    editUserProfileSchema,
    loginUserSchema,
    registerUserSchema,
} from "./user";
import { AddEmployeeInput, DeleteEmployeeInput, addEmployeeSchema, deleteEmployeeSchema } from "./employee";

export {
    createProductSchema,
    deleteProductSchema,
    editProductSchema,
    editUserProfileSchema,
    loginUserSchema,
    registerUserSchema,
    addEmployeeSchema,
    deleteEmployeeSchema,
};

export type {
    AddEmployeeInput,
    DeleteEmployeeInput,
    EditUserProfileInput,
    LoginUserInput,
    RegisterUserInput,
    CreateProductInput,
    DeleteProductInput,
    EditProductInput,
};
