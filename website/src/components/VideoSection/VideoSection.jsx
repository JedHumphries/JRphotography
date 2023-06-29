import React from 'react'
import { VideoContainer, VideoBg, VideoMp4, VideoContent, H1Video, VideoP  } from './VideoSection.styled'
import Video from '../../videos/video.mp4'

const VideoSection = () => {
  return (
    <VideoContainer>
        <VideoBg>
        <VideoMp4 src={Video} autoPlay loop muted type="video/mp4" />
        </VideoBg>
        <VideoContent>
          <H1Video> Joe Roper</H1Video>
          <VideoP>[ Photographer, Videographer, Artist]</VideoP>
        </VideoContent>
    </VideoContainer>
  )
}

export default VideoSection