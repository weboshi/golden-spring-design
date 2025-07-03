export interface Product {
    model: string,
    thickness: [],
    height: string,
    adjustment: string,
    reversible: boolean,
    magnetic: boolean,
    profile: string,
    images: ImageObject[]
}


export type ImageObject = {
    id: number,
    src: string,
    alt: string,
    width: string,
    height: string
}