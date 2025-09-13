export type GalleryItem = {
    src: string;
    alt?: string;
    title?: string;
}

export const gallery: GalleryItem[] = [
    { src: "/img/gallery/1.png", alt: "Artwork 1 description", title: "沙漠使者" },
    { src: "/img/gallery/2.png", alt: "Artwork 2 description", title: "真拿你没办法" },
    { src: "/img/gallery/3.jpg", alt: "Artwork 3 description", title: "疾风" },
    { src: "/img/gallery/4.jpg", alt: "Artwork 4 description", title: "Ready2Go!" },
]