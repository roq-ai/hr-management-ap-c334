import { UserInterface } from 'interfaces/user';
import { JobPostingInterface } from 'interfaces/job-posting';
import { GetQueryInterface } from 'interfaces';

export interface ApplicantInterface {
  id?: string;
  user_id: string;
  job_posting_id: string;
  resume: string;
  cover_letter?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  job_posting?: JobPostingInterface;
  _count?: {};
}

export interface ApplicantGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  job_posting_id?: string;
  resume?: string;
  cover_letter?: string;
  status?: string;
}
