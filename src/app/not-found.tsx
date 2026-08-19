import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal-dark text-ivory flex flex-col items-center justify-center p-6 text-center">
      <h1 className="font-serif text-5xl font-bold text-gold mb-4">404</h1>
      <h2 className="font-serif text-2xl mb-4">Page Not Found</h2>
      <p className="text-sm text-ivory/70 max-w-md mb-8">
        The requested page is reserved for a future phase or does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-terracotta hover:bg-terracotta-dark text-white font-medium rounded transition-colors text-sm"
      >
        Return to Home Page
      </Link>
    </div>
  );
}
