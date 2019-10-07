import { Planet } from './planet';

export interface Api {
    count: number;
    next: string | null;
    previous: string;
    results: Planet[];
}