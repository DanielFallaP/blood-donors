export class Record{
  id: string;
  type: string;
  owner: string;
  timeStarted?: number;
  timeStartedDate?: Date;
  state: string;
  metrics: number;
  build: number;
  unitTest: number;
  functionalTest: number;
  open: boolean=false;
}
