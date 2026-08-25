import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F1B33] text-[#FAF5EB] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="font-serif text-6xl font-bold text-gold mb-4">404</h1>
      <h2 className="font-serif text-2xl sm:text-3xl mb-4 font-semibold">Page Not Found</h2>
      <p className="text-sm text-[#D9CDAE] max-w-md mb-8 leading-relaxed font-sans">
        The requested page is reserved for a future phase or does not exist.
      </p>
      <Link
        href="/"
        className="btn-primary px-7 py-3 text-sm font-semibold tracking-wide"
      >
        Return to Home Page
      </Link>
    </div>
  );
}
