import { EmployeePermissions } from './employee-permissions';

export class Employee {
    employeeId?: number;
    firstName: string;
    maidenName?: string;
    lastName: string;
    contactNumber: string;
    alternativeNumber?: string;
    physicalAddress: string;
    postalAddress: string;
    said: number;
    email: string;
    userRights?: EmployeePermissions;
}
