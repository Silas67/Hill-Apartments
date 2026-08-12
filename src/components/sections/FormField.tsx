type FormFieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
};

/**
 * Underlined form input. Keeps label/id/name in sync so the association can
 * never drift apart the way the hand-written fields had.
 */
export default function FormField({
  id,
  label,
  type,
  placeholder,
  autoComplete,
}: FormFieldProps) {
  return (
    <div className="pt-8">
      <label
        htmlFor={id}
        className="block text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required
        className="w-full bg-transparent border-0 border-b border-line py-3 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors duration-300"
      />
    </div>
  );
}
