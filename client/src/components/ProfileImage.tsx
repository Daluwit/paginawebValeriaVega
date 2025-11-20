import { useState } from "react";

interface ProfileImageProps {
  className?: string;
  alt?: string;
}

export default function ProfileImage({ 
  className = "", 
  alt = "Valeria Vega" 
}: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!imageError ? (
        <img
          src="/profile-image.png"
          alt={alt}
          className="w-full h-full object-cover object-center"
          onError={() => setImageError(true)}
        />
      ) : (
        <div 
          className="w-full h-full flex items-center justify-center rounded-lg border-2 border-dashed"
          style={{ 
            backgroundColor: "#faf6f1",
            borderColor: "#ded6cb"
          }}
        >
          <div className="text-center p-8">
            <div 
              className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#dee9f6" }}
            >
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                style={{ color: "#306ab0" }}
              >
                <path 
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p 
              className="text-sm mb-2"
              style={{ color: "#082053", fontWeight: 500 }}
            >
              Imagen de perfil
            </p>
            <p 
              className="text-xs"
              style={{ color: "#082053", fontWeight: 400, opacity: 0.7 }}
            >
              Coloca tu imagen en /public/profile-image.png
            </p>
            <p 
              className="text-xs mt-2"
              style={{ color: "#306ab0", fontWeight: 400 }}
            >
              (PNG con fondo transparente recomendado)
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

