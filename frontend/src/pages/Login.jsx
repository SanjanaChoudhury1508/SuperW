import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// ── Axios instance ──
const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
});

// ── Helpers ──
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

// ── Login ──
export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "", rememberMe: false });
  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const set = (field) => (e) =>
    setForm((prev) => ({
      ...prev,
      [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  // ── Client-side validation ──
  function validate() {
    const errs = {};
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address.";
    if (!form.password) errs.password = "Password is required.";
    else if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters.";
    return errs;
  }

  // ── Parse backend validation errors ───
  function parseBackendErrors(err) {
    const data = err.response?.data;
    if (!data) return { general: "Something went wrong. Please try again." };

    if (Array.isArray(data.errors)) {
      const fields = {};
      data.errors.forEach(({ field, msg, message }) => {
        if (field) fields[field] = msg || message;
      });
      if (Object.keys(fields).length) return { fields };
    }

    if (data.errors && typeof data.errors === "object" && !Array.isArray(data.errors)) {
      return { fields: data.errors };
    }

    return { general: data.message || "Login failed. Please try again." };
  }

  // ── Submit ──
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
      const { data } = await api.post("/api/auth/login", {
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      // ── Persist session ───
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/interests");
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
            <h1 className="text-2xl font-bold text-white tracking-tight">Welcome back</h1>
            <p className="text-sm text-gray-500 mt-1">Your wellness journey continues here.</p>
          </div>

          {serverError && <ErrorBanner message={serverError} />}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">

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

            <InputField
              label="Password"
              id="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={set("password")}
              placeholder="••••••••"
              error={fieldErrors.password}
              autoComplete="current-password"
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={form.rememberMe}
                  onChange={set("rememberMe")}
                  className="w-4 h-4 accent-amber-500 cursor-pointer"
                />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
              >
                Forgot password?
              </Link>
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
                  Signing in…
                </span>
              ) : (
                "Sign in to SuperW"
              )}
            </button>

          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/[0.05]" />
            <span className="text-xs text-gray-600">New to SuperW?</span>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </div>

          <Link
            to="/register"
            className="block w-full py-3 rounded-xl border border-white/[0.08] bg-[#1a1a1f] hover:bg-[#222228] hover:border-white/[0.12] text-sm text-gray-300 font-medium text-center transition-all duration-150"
          >
            Create your free account →
          </Link>

        </div>

        <p className="mt-6 text-center text-xs text-gray-600">
          By continuing, you agree to SuperW's{" "}
          <Link to="/terms" className="hover:text-gray-400 underline underline-offset-2 transition-colors">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="hover:text-gray-400 underline underline-offset-2 transition-colors">
            Privacy Policy
          </Link>.
        </p>

      </div>
    </div>
  );
}