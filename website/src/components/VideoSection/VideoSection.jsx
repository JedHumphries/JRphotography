import React from 'react'
import { VideoContainer, VideoBg  } from './VideoSection.styled'
import Video from '../../videos/video.mp4'

const VideoSection = () => {
  return (
    <VideoContainer>
        <VideoBg src={Video} autoPlay loop muted />
    </VideoContainer>
  )
}

export default VideoSection