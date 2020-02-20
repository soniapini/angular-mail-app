export interface Message {
  id?: number;
  subject: string;
  from: string;
  to: string;
  body: string;
  date?: Date;
  folder?: number;

}
