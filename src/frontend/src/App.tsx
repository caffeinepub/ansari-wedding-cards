import { useEffect } from "react";

// Floating petal decorations
const petals = ["🌸", "🌺", "🌹", "💐", "🌷"];

function FloatingPetal({
  emoji,
  style,
}: {
  emoji: string;
  style: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none select-none absolute text-2xl opacity-60 animate-float"
      style={style}
    >
      {emoji}
    </span>
  );
}

export default function App() {
  // Set page meta
  useEffect(() => {
    document.title = "Ansari Wedding Cards — Shadi, Walima & Birthday Designs";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Order beautiful Shadi, Walima, and Birthday card designs from Ansari Wedding Cards. Contact us on WhatsApp for custom orders.",
      );
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content =
        "Order beautiful Shadi, Walima, and Birthday card designs from Ansari Wedding Cards. Contact us on WhatsApp for custom orders.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Layered gradient background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, oklch(0.85 0.14 10 / 0.8) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, oklch(0.82 0.12 350 / 0.7) 0%, transparent 55%), radial-gradient(ellipse at 50% 50%, oklch(0.90 0.07 30 / 0.9) 0%, oklch(0.87 0.09 20) 100%)",
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating petals — decorative */}
      <FloatingPetal
        emoji={petals[0]}
        style={{ top: "8%", left: "5%", animationDelay: "0s" }}
      />
      <FloatingPetal
        emoji={petals[1]}
        style={{ top: "15%", right: "8%", animationDelay: "1.2s" }}
      />
      <FloatingPetal
        emoji={petals[2]}
        style={{ top: "60%", left: "3%", animationDelay: "2.1s" }}
      />
      <FloatingPetal
        emoji={petals[3]}
        style={{ bottom: "15%", right: "5%", animationDelay: "0.8s" }}
      />
      <FloatingPetal
        emoji={petals[4]}
        style={{ bottom: "25%", left: "10%", animationDelay: "3s" }}
      />
      <FloatingPetal
        emoji={petals[0]}
        style={{ top: "40%", right: "4%", animationDelay: "1.6s" }}
      />

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div
          className="w-full max-w-xl opacity-0 animate-scale-in"
          style={{ animationFillMode: "forwards" }}
        >
          {/* Card */}
          <div
            className="bg-white rounded-3xl overflow-hidden"
            style={{
              boxShadow:
                "0 4px 6px -1px oklch(0.48 0.17 15 / 0.12), 0 20px 60px -12px oklch(0.48 0.17 15 / 0.22), 0 0 0 1px oklch(0.88 0.06 30)",
            }}
          >
            {/* Gold top border */}
            <div
              className="h-1.5 w-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.88 0.16 80), oklch(0.72 0.14 60), oklch(0.88 0.16 80), oklch(0.78 0.12 75))",
              }}
            />

            {/* Banner Image */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "2/1" }}
            >
              <img
                src="/assets/generated/wedding-banner.dim_800x400.jpg"
                alt="Elegant wedding card designs with floral motifs"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Overlay gradient for smooth transition */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 50%, oklch(1 0 0 / 0.4) 100%)",
                }}
              />
            </div>

            {/* Card body */}
            <div className="px-8 pt-8 pb-10 text-center space-y-6">
              {/* Ornamental top decoration */}
              <div
                className="text-xl tracking-widest animate-shimmer"
                style={{ color: "oklch(0.72 0.14 60)" }}
                aria-hidden="true"
              >
                ✦ ✦ ✦
              </div>

              {/* Business Name */}
              <div
                className="opacity-0 animate-fade-in-up delay-200"
                style={{ animationFillMode: "forwards" }}
              >
                <h1
                  className="font-display text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
                  style={{ color: "oklch(0.32 0.1 15)" }}
                >
                  💍 Ansari{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.52 0.17 15), oklch(0.72 0.14 60), oklch(0.48 0.15 10))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Wedding
                  </span>
                  <br />
                  Cards
                </h1>
              </div>

              {/* Ornamental divider */}
              <div
                className="opacity-0 animate-fade-in-up delay-300"
                style={{ animationFillMode: "forwards" }}
              >
                <div className="flex items-center justify-center gap-3">
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, oklch(0.78 0.12 75 / 0.7))",
                    }}
                  />
                  <span
                    className="text-lg"
                    style={{ color: "oklch(0.72 0.14 60)" }}
                    aria-hidden="true"
                  >
                    ❧
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(to left, transparent, oklch(0.78 0.12 75 / 0.7))",
                    }}
                  />
                </div>
              </div>

              {/* Tagline */}
              <div
                className="opacity-0 animate-fade-in-up delay-300"
                style={{ animationFillMode: "forwards" }}
              >
                <p
                  className="font-body text-xl sm:text-2xl font-medium tracking-wide"
                  style={{ color: "oklch(0.45 0.09 20)" }}
                >
                  Shadi · Walima · Birthday
                </p>
                <p
                  className="font-body text-base sm:text-lg mt-1"
                  style={{ color: "oklch(0.55 0.07 25)" }}
                >
                  Card Design Available
                </p>
              </div>

              {/* Service badges */}
              <div
                className="opacity-0 animate-fade-in-up delay-500 flex flex-wrap justify-center gap-2"
                style={{ animationFillMode: "forwards" }}
              >
                {[
                  "Custom Designs",
                  "Premium Quality",
                  "Fast Delivery",
                  "Affordable Prices",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full font-body text-sm font-medium"
                    style={{
                      background: "oklch(0.94 0.04 30)",
                      color: "oklch(0.42 0.1 15)",
                      border: "1px solid oklch(0.85 0.07 30)",
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* WhatsApp CTA section */}
              <div
                className="opacity-0 animate-fade-in-up delay-700 pt-2"
                style={{ animationFillMode: "forwards" }}
              >
                <p
                  className="font-display text-lg font-semibold mb-4"
                  style={{ color: "oklch(0.38 0.08 20)" }}
                >
                  Order on WhatsApp
                </p>

                <a
                  href="https://wa.me/919296047240"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="hero.primary_button"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-display font-bold text-lg text-white transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.54 0.19 145), oklch(0.48 0.17 145))",
                    boxShadow:
                      "0 4px 15px oklch(0.48 0.17 145 / 0.4), 0 1px 3px oklch(0.48 0.17 145 / 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, oklch(0.48 0.17 145), oklch(0.42 0.15 145))";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px oklch(0.48 0.17 145 / 0.5), 0 2px 6px oklch(0.48 0.17 145 / 0.4)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, oklch(0.54 0.19 145), oklch(0.48 0.17 145))";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px oklch(0.48 0.17 145 / 0.4), 0 1px 3px oklch(0.48 0.17 145 / 0.3)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* WhatsApp icon (inline SVG) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Order Now
                </a>

                <p
                  className="font-body text-sm mt-3"
                  style={{ color: "oklch(0.60 0.06 25)" }}
                >
                  Tap to chat with us directly on WhatsApp
                </p>
              </div>

              {/* Bottom ornamental divider */}
              <div
                className="opacity-0 animate-fade-in-up delay-700"
                style={{ animationFillMode: "forwards" }}
              >
                <div className="flex items-center justify-center gap-3 pt-2">
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(to right, transparent, oklch(0.78 0.12 75 / 0.5))",
                    }}
                  />
                  <span
                    className="text-base tracking-widest"
                    style={{ color: "oklch(0.75 0.12 70)" }}
                    aria-hidden="true"
                  >
                    ✦ ✦ ✦
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(to left, transparent, oklch(0.78 0.12 75 / 0.5))",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Gold bottom border */}
            <div
              className="h-1.5 w-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.78 0.12 75), oklch(0.88 0.16 80), oklch(0.72 0.14 60), oklch(0.88 0.16 80), oklch(0.78 0.12 75))",
              }}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-4 px-4">
        <p
          className="font-body text-sm"
          style={{ color: "oklch(0.45 0.08 20)" }}
        >
          © {new Date().getFullYear()}. Built with ♥ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-70 transition-opacity"
            style={{ color: "oklch(0.48 0.12 15)" }}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
