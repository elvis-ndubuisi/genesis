import { SalesEmployee, SalesEmployeeModel } from "../../models/salesprit.models";

export function createEmployeeService(employee: any) {
    return SalesEmployeeModel.create(employee);
}
