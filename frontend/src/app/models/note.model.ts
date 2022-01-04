export class Note {
  id: number;
  created: string;
  modified: string;

  constructor(public text: string = '') {
  }
}
