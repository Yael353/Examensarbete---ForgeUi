"use client";

import { useState } from "react";

export default function Colors() {
  const [color, setColor] = useState("#FFD700");
  const [format, setFormat] = useState("HEX");
  const [favorites, setFavorites] = useState<string[]>([]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getFormattedColor());
    alert(`Kopierade ${getFormattedColor()} till urklipp!`);
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
    <div className="p-8 max-w-xl mx-auto space-y-8">
      <h1 className="text-4xl font-cinzel font-bold text-center text-gold drop-shadow-lg">
        Färgverktyg
      </h1>

      {/* Färgruta */}
      <div >
        <div className="rounded-xl overflow-hidden border-2 border-foreground shadow-lg">
          <div
            className="w-full h-48"
            style={{
              background: `linear-gradient(135deg, ${color}, #000)`,
            }}
          ></div>
        </div>

        {/* Kontrollpanel */}
        <div className="bg-background rounded-xl p-6 border border-foreground/20 shadow-inner space-y-6">
          {/* Färgkod, kopiera & favorit */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xl font-mono text-foreground flex-1">
              {getFormattedColor()}
            </span>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 rounded bg-gold text-background font-bold hover:bg-opacity-90 transition"
            >
              Kopiera
            </button>
            <button
              onClick={addToFavorites}
              className="px-4 py-2 rounded bg-foreground text-background font-bold hover:bg-opacity-90 transition"
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
            className="p-2 rounded border border-foreground bg-background text-foreground"
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
          className="w-full h-14 rounded cursor-pointer border border-foreground"
        />
      </div>

      {/* Favoriter */}
      {favorites.length > 0 && (
        <div className="bg-background border border-foreground/10 rounded-lg p-4 space-y-2 shadow-inner">
          <h2 className="text-lg font-cinzel text-gold">Favoriter</h2>
          <div className="grid grid-cols-5 gap-2">
            {favorites.map((fav, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded shadow border border-foreground cursor-pointer"
                style={{ background: fav }}
                title={fav}
                onClick={() => setColor(fav)}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
