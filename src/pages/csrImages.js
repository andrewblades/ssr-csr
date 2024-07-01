import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Images.css'; // Custom CSS file for styling

const CSRImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Track current page for pagination

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            count: 12,
            page: page,
          },
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
          },
        });
        setImages((prevImages) => [...prevImages, ...response.data]); // Append new images to existing ones
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, [page]); // Fetch images whenever `page` changes

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1); // Increment page to load more images
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-2">Client Side Rendered Images</h1>
      <div className="image-container">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.urls.thumb} alt={image.alt_description} className="rounded" />
          </div>
        ))}
      </div>
      <button className="button" onClick={loadMoreImages}>
        Load More Images
      </button>
      {loading && <p className="loading">Loading...</p>}
    </div>
  );
};

export default CSRImages;