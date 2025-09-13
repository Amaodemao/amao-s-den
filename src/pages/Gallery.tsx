import React, { useEffect, useRef, useState } from "react";
import { gallery as items, type GalleryItem } from "../data/gallery";

type LightboxState = {
    open: boolean;
    src: string;
    alt: string;
    caption: string;
}

export default function Gallery() {
    const [lb, setLb] = useState<LightboxState>(
        {
            open: false,
            src: "",
            alt: "",
            caption: ""
        }
    );
    const gridRef = useRef<HTMLDivElement | null>(null);

    const onImgLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
        const img = e.currentTarget;
        if (img.naturalWidth <= img.naturalHeight) {
            img.classList.add("portrait");
        }
        else {
            img.classList.remove("portrait");
        }
    };

    useEffect(() => {
        if (!lb.open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLb((s) => ({ ...s, open: false}));
        };
        document.addEventListener("keyup", onKey);
        return () => document.removeEventListener("keyup", onKey);
    }, []);

    const onOverlayClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const target = e.target as HTMLElement;
        if (target.id === "lightbox") {
            setLb((s) => ({ ...s, open: false}));
        };
    };

    const openLightbox = (it: GalleryItem) => {
        setLb({
            open: true,
            src: it.src,
            alt: it.alt ?? "",
            caption: it.title ?? "",
        });
    };


    return (
        <section id="gallery" className="container" aria-labelledby="gallery-title">
        <h2 id="gallery-title">Gallery</h2>

        <div className="gallery grid" ref={gridRef}>
            {items.map((it: GalleryItem, i: number) => (
            <figure key={i} onClick={() => openLightbox(it)}>
                <img
                src={it.src}
                alt={it.alt ?? ""}
                onLoad={onImgLoad}
                loading="lazy"
                />
                <figcaption>{it.title}</figcaption>
            </figure>
            ))}
        </div>

        {/* Lightbox overlay */}
        <div
            id="lightbox"
            className={lb.open ? "open" : ""}
            aria-hidden={lb.open ? "false" : "true"}
            onClick={onOverlayClick}
        >
            <figure>
            {lb.open && <img src={lb.src} alt={lb.alt} />}
            <figcaption>{lb.caption}</figcaption>
            </figure>
        </div>
        </section>
    );
}
