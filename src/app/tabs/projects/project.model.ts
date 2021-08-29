export class Link {
	public name: string;
	public url: string;
	constructor(name: string, url: string) {
		this.name = name;
		this.url = url;
	}
}

export class Project {
	public name: string;
	public description: string;
	public imgPath: string;
	public tags: string[];
	public links: Link[];

	constructor(name: string, description: string, imgPath: string, links: Link[], tags: string[]) {
		this.name = name;
		this.description = description;
		this.imgPath = imgPath;
		this.tags = tags;
		this.links = links;
	}
}
