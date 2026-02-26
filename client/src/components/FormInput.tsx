import React from "react";

interface FormInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** Optional element rendered to the right of the label (e.g. "Forgot password?" link) */
    labelAction?: React.ReactNode;
}

/**
 * Reusable themed form input with gold label.
 */
export function FormInput({
    label,
    name,
    type = "text",
    placeholder,
    required = true,
    value,
    onChange,
    labelAction,
}: FormInputProps) {
    return (
        <div className="space-y-2">
            <div className={`flex items-end ${labelAction ? "justify-between" : ""} mb-1`}>
                <label className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A84C] block ml-1">
                    {label}
                </label>
                {labelAction}
            </div>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/50 transition-all font-medium"
            />
        </div>
    );
}
