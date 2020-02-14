export interface Message {
  subject: string;
  from: string;
  to: string;
  body: string;
  selected?: boolean;
}
