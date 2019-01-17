import { Project } from "./project";

export class Timeline {
    timelineId: number;
    stage: string;
    description: string;
    startDate: Date;
    endDate: Date;
    extenstion?: Date;
    projectId: number;
    projectStatusId: number;
    
    project: Project;
}
