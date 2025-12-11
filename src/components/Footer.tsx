interface FooterProps {
  transparent?: boolean;
}

export const Footer = ({ transparent = false }: FooterProps) => {
  return (
    <footer className={`py-12 border-t border-border/20 ${transparent ? "bg-transparent" : "bg-black"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground text-sm font-light tracking-wide">
            AMAI Labs · Infrastructure & Research
          </p>
          <p className="text-muted-foreground/60 text-xs font-light tracking-wide">
            © 2025 AMAI Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};