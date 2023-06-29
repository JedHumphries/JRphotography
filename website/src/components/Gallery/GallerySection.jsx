import React from 'react'
import { GalleryContainer, H1Gallery, GallerySectionBg, PicOne, PicTwo, PicThree, PicInfo  } from './GallerySection.styled'
 

const GallerySection = () => {
  return (
    <>
    <GalleryContainer>
    <H1Gallery>GALLERY</H1Gallery>
        <GallerySectionBg to="gallery">
            <PicOne />
            <PicInfo> Picture of a dog.</PicInfo>
            </GallerySectionBg>
            <GallerySectionBg to="gallery">
             <PicTwo/> 
             <PicInfo> Picture of a person.</PicInfo>  
            </GallerySectionBg>
            <GallerySectionBg to="gallery">
             <PicThree/>
             <PicInfo> Picture of a landscape.</PicInfo>   
            </GallerySectionBg>
            
    </GalleryContainer>
    </>
  )
}

export default GallerySection