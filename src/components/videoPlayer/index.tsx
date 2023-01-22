interface IVideoPlayer {
  link: string;
}

export const VideoPlayer = ({ link }: IVideoPlayer) => {
  return (
    <div>
      <iframe
        width="980"
        height="550"
        src={`https://www.youtube.com/embed/${link}?enablejsapi=0&amp;autoplay=0&amp;modestbranding=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
