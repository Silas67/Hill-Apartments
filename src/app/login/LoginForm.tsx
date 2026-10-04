"use client";
import { useActionState } from "react";
import { login, type LoginState } from "./actions";

const input =
  "w-full bg-transparent border-0 border-b border-line py-3 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors duration-300";
const label = "block text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint";

export default function LoginForm({ next }: { next?: string }) {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    login,
    {}
  );

  return (
    <form action={formAction} className="w-full">
      <input type="hidden" name="next" value={next ?? ""} />

      <div className="pt-8">
        <label htmlFor="email" className={label}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          className={input}
        />
      </div>
      <div className="pt-8">
        <label htmlFor="password" className={label}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Your password"
          required
          className={input}
        />
      </div>

      {state.error && (
        <p role="alert" className="mt-6 text-sm text-red-700">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full mt-12 border border-ink px-9 py-4 text-[0.72rem] uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-background transition-colors duration-500 disabled:opacity-50"
      >
        {pending ? "Signing in…" : "Log In"}
      </button>
    </form>
  );
}
