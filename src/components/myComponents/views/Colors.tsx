import { Copy } from "lucide-react";
import { useState } from "react";
import { useAnimation } from "framer-motion";

export default function Colors() {
  const [color, setColor] = useState("#FFD700");
  const [format, setFormat] = useState("HEX");
  const [favorites, setFavorites] = useState<string[]>([]);
  const colorBoxControls = useAnimation();

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    colorBoxControls.start({
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 },
    });
  };

  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const hexToHsl = (hex: string) => {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h = 0,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(
      l * 100
    )}%)`;
  };

  const getFormattedColor = () => {
    switch (format) {
      case "RGB":
        return hexToRgb(color);
      case "HSL":
        return hexToHsl(color);
      default:
        return color;
    }
  };

  const addToFavorites = () => {
    if (!favorites.includes(color)) {
      setFavorites([...favorites, color]);
      colorBoxControls.start({
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.4 },
      });
    }
  };

  return (
    <div>
      <h3 className="text-5xl font-bold mb-4">Colors</h3>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Shape your palette, Copy with a click, and color your world.
      </p>
      <div className="min-h-screen bg-gradient-to-br border-2 rounded-md p-8 flex flex-col items-center space-y-10">
        {/* Färgruta */}
        <div className="w-full max-w-xl rounded-xl overflow-hidden border-4 border-gold shadow-2xl transition-all duration-300">
          <div
            className="w-full h-60 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, ${color}, #000)`,
            }}
          />
        </div>

        {/* Kontrollpanel */}
        <div className="w-full max-w-xl bg-popover backdrop-blur rounded-xl p-6 border border-border shadow-inner space-y-6 transition">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xl font-mono text-foreground flex-1 break-words">
              {getFormattedColor()}
            </span>
            <div className="flex">
              <button
                onClick={() => handleCopy(getFormattedColor())}
                className="top-2 right-2 pr-4 pt-2 text-foreground hover:text-gold transition"
                aria-label="Copy to clipboard"
              >
                <Copy size={40} />
              </button>

              <button
                onClick={addToFavorites}
                className="px-4 py-2 rounded bg-background text-gold font-bold hover:bg-primary transition"
              >
                ★
              </button>
            </div>
          </div>

          {/* Formatval */}
          <div className="flex items-center gap-4">
            <label className="text-foreground font-cinzel">Format:</label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="p-2 rounded border border-border bg-background text-foreground focus:ring-2 focus:ring-gold transition"
            >
              <option value="HEX">HEX</option>
              <option value="RGB">RGB</option>
              <option value="HSL">HSL</option>
            </select>
          </div>

          {/* Färginput */}
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-14 rounded cursor-pointer border border-border shadow-inner"
          />
        </div>

        {/* Favoriter */}
        {favorites.length > 0 && (
          <div className="w-full max-w-xl bg-popover backdrop-blur border border-border rounded-lg p-4 space-y-4 shadow-inner">
            <h2 className="text-lg font-cinzel text-gold">Favoriter</h2>
            <div className="grid grid-cols-5 sm:grid-cols-8 gap-3">
              {favorites.map((fav, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded shadow border border-border cursor-pointer transition hover:scale-105"
                  style={{ background: fav }}
                  title={fav}
                  onClick={() => {
                    setColor(fav);
                    handleCopy(fav);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
