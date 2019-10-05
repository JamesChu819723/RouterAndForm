export interface Article {
  id?: number;
  author: string;
  title: string;
  createdDate?: Date;
  paragraphs: string[];
}
