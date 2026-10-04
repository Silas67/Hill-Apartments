import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) => {
  const { next, error } = await searchParams;

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background px-6 py-24">
      <div className="w-full max-w-[26rem]">
        <Link
          href="/"
          className="link-underline text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint"
        >
          OG Winners Homes
        </Link>

        <h1 className="display-md text-ink mt-8">Admin log in</h1>
        <hr className="hairline mt-8" />

        {error === "forbidden" && (
          <p role="alert" className="mt-6 text-sm text-red-700">
            That account does not have admin access.
          </p>
        )}

        <LoginForm next={next} />
      </div>
    </main>
  );
};

export default page;
