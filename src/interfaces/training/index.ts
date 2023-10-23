import { GetQueryInterface } from 'interfaces';

export interface TrainingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TrainingGetQueryInterface extends GetQueryInterface {
  id?: string;
}
