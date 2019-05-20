export interface IStudent {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
}

export const defaultValue: Readonly<IStudent> = {};
