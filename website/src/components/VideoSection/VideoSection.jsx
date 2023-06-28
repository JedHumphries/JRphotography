import React from 'react'
import { VideoContainer, VideoBg, VideoMp4  } from './VideoSection.styled'
import Video from '../../videos/video.mp4'

const VideoSection = () => {
  return (
    <VideoContainer>
        <VideoBg>
        <VideoMp4 src={Video} autoPlay loop muted />
        </VideoBg>
    </VideoContainer>
  )
}

export default VideoSection