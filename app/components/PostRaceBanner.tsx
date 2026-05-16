interface PostRaceBannerProps {
  title: string;
  message: string;
}

export default function PostRaceBanner({ title, message }: PostRaceBannerProps) {
  const showMessage = message.trim().length > 0;

  return (
    <div className="bg-accent text-ink py-6 px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-3 text-center">
        <p className="font-impact text-4xl md:text-6xl uppercase leading-tight">{title}</p>
        {showMessage ? (
          <p className="font-impact text-xl md:text-2xl uppercase opacity-90 max-w-3xl whitespace-pre-line">
            {message.trim()}
          </p>
        ) : null}
      </div>
    </div>
  );
}
