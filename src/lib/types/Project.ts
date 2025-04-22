export interface Project {
	id: number;
	title: string;
	description: string;
	githubUrl: string;
	technologies?: string[];
	liveUrl?: string;
}

export interface Technology {
    name: string;
    iconClass: string;
}