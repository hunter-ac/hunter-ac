const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm text-silver-dim">
          © {new Date().getFullYear()} Hunter Automotive Consulting
        </span>
        <div className="flex gap-6">
          <a href="#" className="font-body text-xs text-silver-dim hover:text-copper transition-colors uppercase tracking-wider">
            Política de privacidad
          </a>
          <a href="#" className="font-body text-xs text-silver-dim hover:text-copper transition-colors uppercase tracking-wider">
            Aviso legal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
