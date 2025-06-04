import { Copy, Star } from "lucide-react";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import ColorPalette from "../ColorPalette";

export default function Colors() {
  const [color, setColor] = useState("#ffffff");
  const [format, setFormat] = useState("HEX");
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    toast(`Copied ${value} to clipboard`);
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
    }
  };

  return (
    <div className="px-4 py-12">
      <h3 className="text-5xl font-bold mb-4">Colors</h3>
      <p className="text-2xl text-muted-foreground mb-10">
        Shape your palette. Copy with a click. Color your world.
      </p>

      {/* Färgvisning */}
      <div className="min-h-screen flex flex-col items-center space-y-12">
        <div className="w-full max-w-3xl rounded-3xl overflow-hidden border border-gold shadow-2xl relative group">
          <div
            className="w-full h-72 transition-all duration-700"
            style={{
              background: `linear-gradient(135deg, ${color}, #000)`,
            }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition rounded-3xl"></div>
        </div>

        {/* Kontrollpanel */}
        <div className="w-full max-w-3xl bg-accent/80 backdrop-blur-md rounded-3xl p-8 border border-gold shadow-2xl space-y-8 transition">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-2xl font-mono text-foreground flex-1 break-words select-all tracking-widest">
              {getFormattedColor()}
            </span>
            <div className="flex gap-3">
              <button
                onClick={() => handleCopy(getFormattedColor())}
                className="p-4 rounded-full bg-gradient-to-tr from-background to-primary text-gold hover:from-primary hover:to-background transition shadow-lg border border-gold flex items-center justify-center"
                aria-label="Copy to clipboard"
              >
                <Copy className="w-7 h-7" />
              </button>

              <button
                onClick={addToFavorites}
                className="p-4 rounded-full bg-gradient-to-tr from-background to-primary text-gold hover:from-primary hover:to-background transition shadow-lg border border-gold flex items-center justify-center"
              >
                <Star className="w-7 h-7" fill="currentColor" stroke="none" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <label className="text-foreground font-cinzel text-xl">
              Format:
            </label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="p-3 rounded-xl border border-gold bg-background text-foreground focus:ring-2 focus:ring-gold transition shadow-inner"
            >
              <option value="HEX">HEX</option>
              <option value="RGB">RGB</option>
              <option value="HSL">HSL</option>
            </select>
          </div>

          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-16 rounded-xl cursor-pointer border border-gold shadow-inner transition"
          />
        </div>

        {/* Favoriter */}
        {favorites.length > 0 && (
          <div className="w-full max-w-3xl bg-popover/80 backdrop-blur-md border border-gold rounded-3xl p-6 space-y-5 shadow-2xl transition">
            <h2 className="text-2xl font-cinzel text-gold mb-3">Favoriter</h2>
            <div className="grid grid-cols-5 sm:grid-cols-8 gap-4">
              {favorites.map((fav, index) => (
                <div
                  key={index}
                  className="w-14 h-14 rounded-xl shadow-lg border border-gold cursor-pointer transition hover:scale-110 hover:ring-2 hover:ring-gold"
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
        <Toaster position="top-right" />
        <div className="w-full flex justify-center">
          <ColorPalette />
        </div>
      </div>
    </div>
  );
}
