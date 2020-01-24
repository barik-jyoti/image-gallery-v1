import { MediaUrl } from './mediaurl';

export interface Item {
    title: string;
    link: string;
    media: MediaUrl;
    date_taken: Date;
    description: string;
    published: Date;
    author: string;
    author_id: string;
    tags: string;
}
