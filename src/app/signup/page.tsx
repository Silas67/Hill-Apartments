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

        <h1 className="display-md text-ink mt-8">Create account</h1>
        <hr className="hairline mt-8" />

        <form className="w-full">
          <div className="pt-8">
            <label
              htmlFor="name"
              className="block text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint"
            >
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              required
              className="w-full bg-transparent border-0 border-b border-line py-3 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors duration-300"
            />
          </div>
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
              htmlFor="phone"
              className="block text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(+234) 800 000 0000"
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
              autoComplete="new-password"
              placeholder="Create your password"
              required
              minLength={8}
              className="w-full bg-transparent border-0 border-b border-line py-3 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-12 border border-ink px-9 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-background transition-colors duration-500"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-ink-muted mt-8">
          Already have an account?{" "}
          <Link href="/login" className="link-underline text-ink">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default page;
