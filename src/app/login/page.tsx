import Link from "next/link";

const page = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background px-6 py-24">
      <div className="w-full max-w-[26rem]">
        <Link
          href="/"
          className="link-underline text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint"
        >
          OG Winners Homes
        </Link>

        <h1 className="display-md text-ink mt-8">Log in</h1>
        <hr className="hairline mt-8" />

        <form className="w-full">
          <div className="pt-8">
            <label
              htmlFor="email"
              className="block text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              className="w-full bg-transparent border-0 border-b border-line py-3 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors duration-300"
            />
          </div>
          <div className="pt-8">
            <label
              htmlFor="password"
              className="block text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Your password"
              required
              className="w-full bg-transparent border-0 border-b border-line py-3 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-12 border border-ink px-9 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-background transition-colors duration-500"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-ink-muted mt-8">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="link-underline text-ink">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
};

export default page;
