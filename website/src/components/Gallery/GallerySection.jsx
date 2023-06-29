import React from 'react'
import { GalleryContainer, GallerySectionBg, PicOne, PicTwo, PicThree, PicInfo  } from './GallerySection.styled'

const GallerySection = () => {
  return (
    <GalleryContainer>
        <GallerySectionBg>
            <PicOne/>
            <PicInfo>Picture of a dog.</PicInfo>
            </GallerySectionBg>
            <GallerySectionBg>
             <PicTwo/> 
             <PicInfo>Picture of a person.</PicInfo>  
            </GallerySectionBg>
            <GallerySectionBg>
             <PicThree/>
             <PicInfo>Picture of a landscape.</PicInfo>   
            </GallerySectionBg>
            
    </GalleryContainer>
  )
}

export default GallerySection