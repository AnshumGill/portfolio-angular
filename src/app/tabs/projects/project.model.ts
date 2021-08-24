export class Project {
	public name: string;
	public description: string;
	public imgPath: string;
	public tags: string[];
	public links: string[];
	public category: string;

	constructor(name: string, description: string, imgPath: string, links: string[], tags: string[], category: string) {
		this.name = name;
		this.description = description;
		this.imgPath = imgPath;
		this.tags = tags;
		this.links = links;
		this.category = category;
	}
}
