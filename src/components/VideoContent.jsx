import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const VideoContent = ({ 
  videoUrl, 
  posterImage, 
  title, 
  description, 
  transcript,
  duration
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-white border border-neutral-200">
      {/* Video Player */}
      <div className="relative aspect-video bg-black">
        <video
          ref={videoRef}
          className="w-full h-full"
          poster={posterImage}
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="hover:scale-110 transition-transform"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              
              <button
                onClick={toggleMute}
                className="hover:scale-110 transition-transform"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <span className="text-sm font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <button
              onClick={toggleFullscreen}
              className="hover:scale-110 transition-transform"
              aria-label="Fullscreen"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-6">
        <h3 className="text-2xl font-light text-black mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>

        {/* Transcript Toggle */}
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          className="flex items-center gap-2 text-black hover:text-neutral-700 transition-colors font-mono text-sm uppercase tracking-wide"
        >
          <FileText className="w-4 h-4" />
          <span>Video Transcript</span>
          {showTranscript ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Transcript Content */}
        {showTranscript && transcript && (
          <div className="mt-4 p-4 bg-neutral-50 border border-neutral-200">
            <h4 className="font-semibold text-black mb-3">Full Transcript</h4>
            <div className="space-y-3 text-sm text-neutral-700 max-h-96 overflow-y-auto">
              {transcript.map((segment, index) => (
                <div key={index} className="flex gap-4">
                  <span className="font-mono text-xs text-neutral-500 mt-1">
                    {formatTime(segment.timestamp)}
                  </span>
                  <p className="flex-1">{segment.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* SEO Schema for Video */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": title,
            "description": description,
            "thumbnailUrl": posterImage,
            "uploadDate": new Date().toISOString(),
            "duration": `PT${Math.floor(duration / 60)}M${Math.floor(duration % 60)}S`,
            "contentUrl": videoUrl,
            "embedUrl": videoUrl,
            "transcript": transcript?.map(s => s.text).join(' ')
          })
        }}
      />
    </div>
  );
};

export default VideoContent;