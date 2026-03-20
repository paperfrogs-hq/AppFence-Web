import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="page-shell flex min-h-screen items-center justify-center px-6 py-16">
      <div className="panel max-w-xl p-8 text-center sm:p-10">
        <span className="section-kicker">404</span>
        <h1 className="mt-6 text-balance text-4xl font-bold tracking-[-0.05em] text-foreground sm:text-5xl">
          This route does not exist.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          The page at <span className="font-mono text-foreground">{location.pathname}</span> could
          not be found.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
        >
          Return home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
