 
 
 type Project =  {
	 client?: string;
	title: string;
	description: string;
	publishDate: string;
	tags: Array<string>;
	img: string;
}


type LayoutProps = Record<"title"|"description", string>

export type {
	Project,
	LayoutProps
}