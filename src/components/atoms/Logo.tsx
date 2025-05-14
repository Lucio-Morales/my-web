const Logo: React.FC = () => {
  return (
    <a href="#inicio" className="pt-2 flex flex-col items-center gap-1 group">
      <span className="text-3xl font-logo italic text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors tracking-wide">
        Lucio Morales
      </span>
    </a>
  );
};

export default Logo;
