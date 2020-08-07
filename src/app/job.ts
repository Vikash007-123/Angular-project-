import { Client } from './client';

export class Job {
  jobId: number;
  jobTitle: String;
  desiredSkills: string;
  experienceRequired: string;
  jobLocation: string;
  jobDescription: string;
  client: Client;
}
