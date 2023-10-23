import { GetQueryInterface } from 'interfaces';

export interface BenefitInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BenefitGetQueryInterface extends GetQueryInterface {
  id?: string;
}
