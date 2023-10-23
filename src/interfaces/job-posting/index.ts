import { ApplicantInterface } from 'interfaces/applicant';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobPostingInterface {
  id?: string;
  title: string;
  description: string;
  requirements: string;
  hr_manager_id: string;
  created_at?: any;
  updated_at?: any;
  applicant?: ApplicantInterface[];
  user?: UserInterface;
  _count?: {
    applicant?: number;
  };
}

export interface JobPostingGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  requirements?: string;
  hr_manager_id?: string;
}
