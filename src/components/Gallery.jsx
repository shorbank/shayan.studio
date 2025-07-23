import useFancybox from "../hooks/useFancyBox";

export default function Gallery() {
  const [fancyboxRef] = useFancybox({
  Carousel: {
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  },
});

  return (
    <>
      <div className="gallery-grid" ref={fancyboxRef}>
        <a data-fancybox="gallery" href="/images/rammstein_angst_cd_single_cover_srgb.jpg">
          <img src="/images/rammstein_angst_cd_single_cover_srgb.jpg" alt="Bild 1" />
        </a>
        <a data-fancybox="gallery" href="/images/rst_zeit_vinyl_ecover_rgb.jpg">
          <img src="/images/rst_zeit_vinyl_ecover_rgb.jpg" alt="Bild 2" />
        </a>
        {/* Optional: Mehr Bilder hier */}
      </div>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          padding: 1rem;
        }

        .gallery-grid a {
          display: block;
          overflow: hidden;
          border-radius: 6px;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
          transition: transform 0.2s;
        }

        .gallery-grid a:hover {
          transform: scale(1.02);
        }

        .gallery-grid img {
          height: 100%;
          width: 100%;
          aspect-ratio: 1/1; 
          display: block;
          object-fit: cover; 
        }
      `}</style>
    </>
  );
}
