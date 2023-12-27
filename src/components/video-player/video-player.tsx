import { forwardRef, memo } from 'react';

export type VideoPlayerProps = {
    video: string;
    posterImage: string;
    onTimeUpdate?: () => void;
    muted?: boolean;
    autoPlay?: boolean;
}

const Player = forwardRef<HTMLVideoElement, VideoPlayerProps>((
  {
    video,
    posterImage,
    onTimeUpdate,
    muted = false,
    autoPlay = false,
  },
  ref
) => (
  <video
    ref={ref}
    className="player__video"
    poster={posterImage}
    onTimeUpdate={onTimeUpdate}
    muted={muted}
    autoPlay={autoPlay}
    data-testid="video-player"
  >
    <source src={video} />
  </video>
));

Player.displayName = 'VideoPlayer';

export const VideoPlayer = memo(Player);
