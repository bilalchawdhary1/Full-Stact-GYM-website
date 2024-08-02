// import React from "react";

const Gallery = () => {
  const gallery = [
    "/class-1.jpg",
    "https://images.pexels.com/photos/1092882/pexels-photo-1092882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/949134/pexels-photo-949134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "/class-4.jpg",
    "/class-5.jpg",
    "https://images.pexels.com/photos/4553611/pexels-photo-4553611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "/class-7.jpg",
    "https://images.pexels.com/photos/2011383/pexels-photo-2011383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "/class-6.jpg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
