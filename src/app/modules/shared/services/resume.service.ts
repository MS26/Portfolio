import {Injectable} from '@angular/core';
import * as data from '../../../../assets/data.json';

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    public get data(): IResume {
        return data as unknown as IResume;
    }
}

export interface IResume {
    basics: IResumeBasics;

    work: Array<IResumeWork>
    education: Array<IResumeEducation>
    skills: Array<string>
    clients: Array<string>
    projects: Array<IResumeProject>
}

export interface IResumeBasics {
    name: string;
    label: string;
    summary: string;

    email: string;

    image: string;
    website: string;

    github: IResumeProfile;
    linkedin: IResumeProfile;
}

export interface IResumeProfile {
    username: string;
    url: string;
}

export interface IResumeProject {
    name: string;
    description: string;
    url: string;
    github_url: string;
    keywords: Array<string>;
}

export interface IResumeWork {
    name: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: Array<IResumeWorkHighlight>;
}

export interface IResumeWorkHighlight {
    title: string;
    description: string;
}

export interface IResumeEducation {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
}