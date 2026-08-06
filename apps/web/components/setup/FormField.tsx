interface FormFieldProps {
  label: string;
  type?: "text" | "email";
  placeholder?: string;
  helpText?: React.ReactNode;
  id?: string;
  name?: string;
  autoComplete?: string;
  inputMode?: "text" | "email";
  required?: boolean;
}

export function FormField({
  label,
  type = "text",
  placeholder,
  helpText,
  id,
  name,
  autoComplete,
  inputMode,
  required,
}: FormFieldProps) {
  return (
    <div className="mt-3">
      <label
        htmlFor={id}
        className="block text-xs mb-[6px]"
        style={{ color: "var(--ch-muted)" }}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        className="w-full rounded-[14px] border bg-white px-3 py-3 text-sm outline-none"
        style={{
          borderColor: "var(--ch-line)",
          color: "var(--ch-text)",
        }}
      />
      {helpText && (
        <div className="mt-[6px] text-xs" style={{ color: "var(--ch-muted)" }}>
          {helpText}
        </div>
      )}
    </div>
  );
}
