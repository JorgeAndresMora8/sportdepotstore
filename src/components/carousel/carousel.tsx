import { useEffect, useState } from "react";
import images from "./imagesURL";
import { useLocation } from 'react-router-dom'
import styles from './carousel.module.scss'

export default function Carousel() {

  const { pathname } = useLocation(); 
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => { 
    if(pathname === '/shoes'){ 
      setShow(true);  // Hide the carousel when the route is not /shoes
    }else{ 
      setShow(false)
    }
  }, [pathname])
  

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (_index:any, images:any, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;

      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 7000);
    return () => clearInterval(interval);
  });

  return (
        <div className={`${show === false && styles.notShow} ${styles.carousel}`}>
          <img
          style={{width:'100%', height:'auto'  }}
            onLoad={() => setLoaded(true)}
            className={`carouselImage ${loaded && "loaded"} `}
            src={`${selectedImage}`}
            alt="banner"
          />
        </div>
  );
}
