import { toast, Toaster } from "sonner";

// function hexToHSL(hex: string) {
//   const r = parseInt(hex.substr(1, 2), 16) / 255;
//   const g = parseInt(hex.substr(3, 2), 16) / 255;
//   const b = parseInt(hex.substr(5, 2), 16) / 255;

//   const max = Math.max(r, g, b);
//   const min = Math.min(r, g, b);
//   let h = 0,
//     s = 0,
//     l = (max + min) / 2;

//   if (max !== min) {
//     const d = max - min;
//     s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
//     switch (max) {
//       case r:
//         h = (g - b) / d + (g < b ? 6 : 0);
//         break;
//       case g:
//         h = (b - r) / d + 2;
//         break;
//       case b:
//         h = (r - g) / d + 4;
//         break;
//     }
//     h /= 6;
//   }
//   return { h: h * 360, s, l };
// }
type ColorScale = {
  name: string;
  values: { label: string; color: string }[];
};

const colorLabels = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

const colorScales: ColorScale[] = [
  {
    name: "Sky",
    values: [
      { label: "50", color: "#f0f9ff" },
      { label: "100", color: "#e0f2fe" },
      { label: "200", color: "#bae6fd" },
      { label: "300", color: "#7dd3fc" },
      { label: "400", color: "#38bdf8" },
      { label: "500", color: "#0ea5e9" },
      { label: "600", color: "#0284c7" },
      { label: "700", color: "#0369a1" },
      { label: "800", color: "#075985" },
      { label: "900", color: "#0c4a6e" },
    ],
  },
  {
    name: "Natural",
    values: [
      { label: "50", color: "#f5f5f4" },
      { label: "100", color: "#e7e5e4" },
      { label: "200", color: "#d6d3d1" },
      { label: "300", color: "#a8a29e" },
      { label: "400", color: "#78716c" },
      { label: "500", color: "#57534e" },
      { label: "600", color: "#44403c" },
      { label: "700", color: "#292524" },
      { label: "800", color: "#1c1917" },
      { label: "900", color: "#0c0a09" },
    ],
  },
  {
    name: "Slate",
    values: [
      { label: "50", color: "#f8fafc" },
      { label: "100", color: "#f1f5f9" },
      { label: "200", color: "#e2e8f0" },
      { label: "300", color: "#cbd5e1" },
      { label: "400", color: "#94a3b8" },
      { label: "500", color: "#64748b" },
      { label: "600", color: "#475569" },
      { label: "700", color: "#334155" },
      { label: "800", color: "#1e293b" },
      { label: "900", color: "#0f172a" },
    ],
  },
  {
    name: "Emerald",
    values: [
      { label: "50", color: "#ecfdf5" },
      { label: "100", color: "#d1fae5" },
      { label: "200", color: "#a7f3d0" },
      { label: "300", color: "#6ee7b7" },
      { label: "400", color: "#34d399" },
      { label: "500", color: "#10b981" },
      { label: "600", color: "#059669" },
      { label: "700", color: "#047857" },
      { label: "800", color: "#065f46" },
      { label: "900", color: "#064e3b" },
    ],
  },
  {
    name: "Amber",
    values: [
      { label: "50", color: "#fffbeb" },
      { label: "100", color: "#fef3c7" },
      { label: "200", color: "#fde68a" },
      { label: "300", color: "#fcd34d" },
      { label: "400", color: "#fbbf24" },
      { label: "500", color: "#f59e0b" },
      { label: "600", color: "#d97706" },
      { label: "700", color: "#b45309" },
      { label: "800", color: "#92400e" },
      { label: "900", color: "#78350f" },
    ],
  },
  {
    name: "Rose",
    values: [
      { label: "50", color: "#fff1f2" },
      { label: "100", color: "#ffe4e6" },
      { label: "200", color: "#fecdd3" },
      { label: "300", color: "#fda4af" },
      { label: "400", color: "#fb7185" },
      { label: "500", color: "#f43f5e" },
      { label: "600", color: "#e11d48" },
      { label: "700", color: "#be123c" },
      { label: "800", color: "#9f1239" },
      { label: "900", color: "#881337" },
    ],
  },
  {
    name: "Indigo",
    values: [
      { label: "50", color: "#eef2ff" },
      { label: "100", color: "#e0e7ff" },
      { label: "200", color: "#c7d2fe" },
      { label: "300", color: "#a5b4fc" },
      { label: "400", color: "#818cf8" },
      { label: "500", color: "#6366f1" },
      { label: "600", color: "#4f46e5" },
      { label: "700", color: "#4338ca" },
      { label: "800", color: "#3730a3" },
      { label: "900", color: "#312e81" },
    ],
  },
  {
    name: "Purple",
    values: [
      { label: "50", color: "#faf5ff" },
      { label: "100", color: "#f3e8ff" },
      { label: "200", color: "#e9d5ff" },
      { label: "300", color: "#d8b4fe" },
      { label: "400", color: "#c084fc" },
      { label: "500", color: "#a855f7" },
      { label: "600", color: "#9333ea" },
      { label: "700", color: "#7e22ce" },
      { label: "800", color: "#6b21a8" },
      { label: "900", color: "#581c87" },
    ],
  },
  {
    name: "Cyan",
    values: [
      { label: "50", color: "#ecfeff" },
      { label: "100", color: "#cffafe" },
      { label: "200", color: "#a5f3fc" },
      { label: "300", color: "#67e8f9" },
      { label: "400", color: "#22d3ee" },
      { label: "500", color: "#06b6d4" },
      { label: "600", color: "#0891b2" },
      { label: "700", color: "#0e7490" },
      { label: "800", color: "#155e75" },
      { label: "900", color: "#164e63" },
    ],
  },
  {
    name: "Orange",
    values: [
      { label: "50", color: "#fff7ed" },
      { label: "100", color: "#ffedd5" },
      { label: "200", color: "#fed7aa" },
      { label: "300", color: "#fdba74" },
      { label: "400", color: "#fb923c" },
      { label: "500", color: "#f97316" },
      { label: "600", color: "#ea580c" },
      { label: "700", color: "#c2410c" },
      { label: "800", color: "#9a3412" },
      { label: "900", color: "#7c2d12" },
    ],
  },
];

export default function ColorPalette() {
  function handleClick(color: string) {
    navigator.clipboard.writeText(color);
    toast.success("Color copied to clipboard");
  }

  return (
    <div className="overflow-x-auto px-4 max-w-[90vw] border border-gold rounded-3xl">
      <table className="border-collapse ">
        <thead>
          <tr>
            <th className="w-auto  py-2 text-left text-base font-semibold text-foreground">
              Scale
            </th>
            {colorLabels.map((label) => (
              <th
                key={label}
                className="px-3 py-2 text-sm font-medium text-foreground"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {colorScales.map((scale) => (
            <tr key={scale.name}>
              <td className="pr-4 py-2 font-semibold text-lg text-foreground ">
                {scale.name}
              </td>
              {colorLabels.map((label) => {
                const colorObj = scale.values.find((v) => v.label === label);
                return (
                  <td key={label} className="px-3">
                    {colorObj ? (
                      <div
                        className="w-10 h-10 rounded-lg border border-black/10 shadow-inner cursor-pointer hover:scale-110 transition"
                        style={{ backgroundColor: colorObj.color }}
                        title={`${scale.name} ${label}`}
                        onClick={() => handleClick(colorObj.color)}
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-gray-200 border border-black/10" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster position="top-right" />
    </div>
  );
}
