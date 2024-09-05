interface PlanetContent {
    content: string;
    source: string;
}

interface PlanetImages {
    planet: string;
    internal: string;
    geology: string;
}

export interface PlanetData {
    name: string;
    overview: PlanetContent;
    structure: PlanetContent;
    geology: PlanetContent;
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: PlanetImages;
}

export interface PlanetType {
    [key: string]: PlanetData; 
}

export interface TabsType {
    name: string;
    id: number;
}