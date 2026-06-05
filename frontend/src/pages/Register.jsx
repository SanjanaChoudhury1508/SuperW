import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// ── Axios instance ─────────────────────────────────────────────────────────────
const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
});

// ── Helpers ────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <div className="flex items-center gap-3 justify-center">
      <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 12s1.5 3 4 3 4-3 4-3" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="9.5" cy="9.5" r="1" fill="#f59e0b" />
          <circle cx="14.5" cy="9.5" r="1" fill="#f59e0b" />
        </svg>
      </div>
      <span className="text-xl font-bold text-white tracking-tight">SuperW</span>
    </div>
  );
}

function EyeIcon({ open }) {
  return open ? (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ErrorBanner({ message }) {
  return (
    <div className="mb-5 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-red-400 flex-shrink-0 mt-0.5">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <p className="text-sm text-red-400">{message}</p>
    </div>
  );
}

function InputField({ label, id, type = "text", value, onChange, placeholder, error, rightSlot, autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete || id}
          className={`w-full bg-[#1a1a1f] border ${
            error
              ? "border-red-500/50 focus:border-red-500/60"
              : "border-white/[0.08] focus:border-amber-500/50"
          } rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-1 ${
            error ? "focus:ring-red-500/15" : "focus:ring-amber-500/15"
          } transition-all duration-150 ${rightSlot ? "pr-12" : ""}`}
        />
        {rightSlot && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">{rightSlot}</div>
        )}
      </div>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

// ── Password strength ──────────────────────────────────────────────────────────
function getStrength(password) {
  if (!password) return { score: 0, label: "", color: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const map = [
    { label: "Too weak", color: "bg-red-500", text: "text-red-400" },
    { label: "Weak", color: "bg-orange-400", text: "text-orange-400" },
    { label: "Fair", color: "bg-yellow-400", text: "text-yellow-400" },
    { label: "Strong", color: "bg-amber-400", text: "text-amber-400" },
    { label: "Very strong", color: "bg-emerald-400", text: "text-emerald-400" },
  ];
  return { score, ...map[score] };
}

function PasswordStrength({ password }) {
  const { score, label, color, text } = useMemo(() => getStrength(password), [password]);
  if (!password) return null;
  return (
    <div className="mt-2.5">
      <div className="flex gap-1 mb-1.5">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`flex-1 h-1 rounded-full transition-all duration-300 ${
              i <= score ? color : "bg-white/[0.06]"
            }`}
          />
        ))}
      </div>
      <p className={`text-xs ${text}`}>{label}</p>
    </div>
  );
}

// ── Parse backend errors ───────────────────────────────────────────────────────
// Handles: { message }, { errors: [{ field, msg }] }, { errors: { name: "..." } }
function parseBackendErrors(err) {
  const data = err.response?.data;
  if (!data) return { general: "Something went wrong. Please try again." };

  if (Array.isArray(data.errors)) {
    const fields = {};
    data.errors.forEach(({ field, msg, message, param }) => {
      const key = field || param;
      if (key) fields[key] = msg || message;
    });
    if (Object.keys(fields).length) return { fields };
  }

  if (data.errors && typeof data.errors === "object" && !Array.isArray(data.errors)) {
    return { fields: data.errors };
  }

  return { general: data.message || "Registration failed. Please try again." };
}

// ── Register ───────────────────────────────────────────────────────────────────
export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const set = (field) => (e) =>
    setForm((prev) => ({
      ...prev,
      [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  // ── Client-side validation ──────────────────────────────────────────────────
  function validate() {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    else if (form.fullName.trim().length < 2) errs.fullName = "Name must be at least 2 characters.";

    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address.";

    if (!form.password) errs.password = "Password is required.";
    else if (form.password.length < 8) errs.password = "Password must be at least 8 characters.";
    else if (getStrength(form.password).score < 2) errs.password = "Please choose a stronger password.";

    if (!form.confirmPassword) errs.confirmPassword = "Please confirm your password.";
    else if (form.confirmPassword !== form.password) errs.confirmPassword = "Passwords do not match.";

    if (!form.acceptTerms) errs.acceptTerms = "You must accept the terms to continue.";

    return errs;
  }

  // ── Submit ──────────────────────────────────────────────────────────────────
  async function handleSubmit(e) {
    e.preventDefault();
    setServerError("");
    setFieldErrors({});

    const clientErrs = validate();
    if (Object.keys(clientErrs).length) {
      setFieldErrors(clientErrs);
      return;
    }

    setLoading(true);
    try {
      const { data } = await api.post("/api/auth/register", {
        name: form.fullName.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      // ── Persist session ─────────────────────────────────────────────────────
      navigate("/login");
    } catch (err) {
      const parsed = parseBackendErrors(err);
      if (parsed.fields) setFieldErrors(parsed.fields);
      else setServerError(parsed.general);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0d0f] flex items-center justify-center px-4 py-12">

      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,158,11,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-md relative">

        <div className="mb-8">
          <Logo />
          <p className="text-center text-xs text-gray-600 mt-2 tracking-wide">
            Your complete women's wellness companion
          </p>
        </div>

        <div className="bg-[#141418] border border-white/[0.06] rounded-2xl p-8">

          <div className="mb-7">
            <h1 className="text-2xl font-bold text-white tracking-tight">Create your account</h1>
            <p className="text-sm text-gray-500 mt-1">
              Join thousands of women taking control of their health.
            </p>
          </div>

          {serverError && <ErrorBanner message={serverError} />}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">

            <InputField
              label="Full name"
              id="fullName"
              type="text"
              value={form.fullName}
              onChange={set("fullName")}
              placeholder="Sanjana Mehta"
              error={fieldErrors.fullName || fieldErrors.name}
              autoComplete="name"
            />

            <InputField
              label="Email address"
              id="email"
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="you@example.com"
              error={fieldErrors.email}
              autoComplete="email"
            />

            {/* Password + strength meter */}
            <div>
              <InputField
                label="Password"
                id="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={set("password")}
                placeholder="Min. 8 characters"
                error={fieldErrors.password}
                autoComplete="new-password"
                rightSlot={
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="text-gray-600 hover:text-gray-300 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <EyeIcon open={showPassword} />
                  </button>
                }
              />
              <PasswordStrength password={form.password} />
            </div>

            <InputField
              label="Confirm password"
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              value={form.confirmPassword}
              onChange={set("confirmPassword")}
              placeholder="Repeat your password"
              error={fieldErrors.confirmPassword}
              autoComplete="new-password"
              rightSlot={
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="text-gray-600 hover:text-gray-300 transition-colors"
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  <EyeIcon open={showConfirm} />
                </button>
              }
            />

            {/* Terms */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={form.acceptTerms}
                  onChange={set("acceptTerms")}
                  className="w-4 h-4 mt-0.5 accent-amber-500 cursor-pointer flex-shrink-0"
                />
                <span className="text-sm text-gray-400 leading-relaxed">
                  I agree to SuperW's{" "}
                  <Link to="/terms" className="text-amber-400 hover:text-amber-300 transition-colors">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-amber-400 hover:text-amber-300 transition-colors">
                    Privacy Policy
                  </Link>
                  , including the handling of my health data.
                </span>
              </label>
              {fieldErrors.acceptTerms && (
                <p className="mt-1.5 text-xs text-red-400">{fieldErrors.acceptTerms}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 text-[#1a0f00] text-sm font-bold shadow-lg shadow-amber-500/10"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Creating your account…
                </span>
              ) : (
                "Join SuperW — It's free"
              )}
            </button>

          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/[0.05]" />
            <span className="text-xs text-gray-600">Already a member?</span>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </div>

          <Link
            to="/login"
            className="block w-full py-3 rounded-xl border border-white/[0.08] bg-[#1a1a1f] hover:bg-[#222228] hover:border-white/[0.12] text-sm text-gray-300 font-medium text-center transition-all duration-150"
          >
            Sign in to your account →
          </Link>

        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-gray-600">
            <path d="M12 3L4 7v5c0 5 3.6 9.3 8 10.3C16.4 21.3 20 17 20 12V7L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-xs text-gray-600">Your health data is encrypted and never sold.</p>
        </div>

      </div>
    </div>
  );
}