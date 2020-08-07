import { Client } from "./client";

export class JobOpening {
    jobId: number;
    jobTitle: String;
    desiredSkills: string;
    experienceRequired: string;
    jobLocation: string;
    jobDescription: string;
    client: Client;
}
