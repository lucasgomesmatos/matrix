interface IVideoPlayer {
  link: string;
}

export const VideoPlayer = ({ link }: IVideoPlayer) => {
  return (
    <div>
      <iframe
        width="960"
        height="560"
        src={`https://www.youtube-nocookie.com/embed/${link}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
