import { Contact } from "../client/contact";
import { Timeline } from "./timeline";

export class ProjectContent
{
    projectContentId:number;
    imagePath:string;
    voiceNotePath:string;
    description:string;

    timelineId:number;
    clientContactInfoId: number;
    client :Contact;
    timeline:Timeline;
}