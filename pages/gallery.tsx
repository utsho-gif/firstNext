import Image from 'next/image';
import { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const arr = ['1', '2', '3', '4', '5'];

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {arr.map((path: any, index) => {
        return (
          <div key={path}>
            <Image
              src={`/${path}.jpg`}
              alt="gallery"
              onClick={() => openImageViewer(index)}
              width="300"
              height="420"
              key={index}
              style={{ margin: '2px' }}
            />
          </div>
        );
      })}
      {isViewerOpen && (
        <ImageViewer
          src={arr.map((n: any) => `${n + '.jpg'}`)}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default Gallery;

export async function getStaticProps() {
  return {
    props: {
      title: 'Gallery',
    },
  };
}
