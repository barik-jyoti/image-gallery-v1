import { Item } from './item';

export interface FlickerResponse {
    title: string;
    link: string;
    description: string;
    modified: Date;
    generator: string;
    items: Item[];
}
