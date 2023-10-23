import { GetQueryInterface } from 'interfaces';

export interface PositionInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PositionGetQueryInterface extends GetQueryInterface {
  id?: string;
}
