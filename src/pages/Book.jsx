import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Book() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/contact#contact-form", { replace: true });
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0B] text-white">
      <div className="text-center">
        <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-[var(--color-primary)] border-t-transparent" />

        <h2 className="font-serif text-3xl font-light">
          Redirecting...
        </h2>

        <p className="mt-4 text-neutral-400">
          Taking you to the consultation form.
        </p>
      </div>
    </div>
  );
}

export default Book;