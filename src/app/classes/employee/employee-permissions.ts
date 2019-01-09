import { Permissions } from '../permissions';

export class EmployeePermissions {
    projects: Permissions;
    finance: Permissions;
    rfq: Permissions;
    quotes: Permissions;
    reports: Permissions;
    admin: Permissions;
    employeeId: number;
}
