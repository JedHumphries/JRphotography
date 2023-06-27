import React from 'react'
import { VideoContainer, VideoSectionBg, VideoBg  } from './VideoSection.styled'
import Video from '../../videos/video.mp4'

const VideoSection = () => {
  return (
    <VideoContainer>
        <VideoSectionBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </VideoSectionBg>
    </VideoContainer>
  )
}

export default VideoSection