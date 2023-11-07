type VideoPlayerProps = {
    video: string;
    posterImage: string;
}

export default function VideoPlayer({video, posterImage }:VideoPlayerProps): JSX.Element {
  return (
    <video
      src={video}
      poster={posterImage}
      width="280"
      height="175"
      muted
      autoPlay
    />
  );
}
