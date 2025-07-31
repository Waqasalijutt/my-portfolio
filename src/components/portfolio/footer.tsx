export function Footer() {
  return (
    <footer className="bg-secondary/50 py-6">
      <div className="container mx-auto px-4 md:px-6 text-center text-foreground/60 font-body">
        <p>&copy; {new Date().getFullYear()} Waqas Ahmad. All Rights Reserved.</p>
        <p className="text-sm mt-1">Built with passion and modern technology.</p>
      </div>
    </footer>
  );
}
