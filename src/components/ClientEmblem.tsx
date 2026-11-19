import { useState } from 'react';
import { Building2, Landmark, Ship } from 'lucide-react';
import type { ClientProfile } from '../data/companyData';

interface ClientEmblemProps {
  client: ClientProfile;
  size?: 'compact' | 'card';
}

export function ClientEmblem({ client, size = 'card' }: ClientEmblemProps) {
  const [imgError, setImgError] = useState(false);

  const FallbackIcon =
    client.sector === 'Logistik & Pelabuhan'
      ? Ship
      : client.sector === 'Bank Nasional & Asing'
      ? Landmark
      : Building2;

  if (size === 'compact') {
    return (
      <div className="w-16 h-11 rounded-lg border border-slate-200 bg-white flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
        {!imgError && client.logo ? (
          <img
            src={client.logo}
            alt={`Logo ${client.name}`}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <div className="flex items-center gap-1">
            <FallbackIcon className="w-3.5 h-3.5" style={{ color: client.accentHex }} />
            <span className="font-mono text-[10px] font-semibold" style={{ color: client.accentHex }}>
              {client.shortCode}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full h-24 rounded-lg border border-slate-200/90 bg-white flex items-center justify-center px-6 py-4 overflow-hidden">
      {!imgError && client.logo ? (
        <img
          src={client.logo}
          alt={`Logo resmi ${client.name}`}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="max-h-14 max-w-[190px] w-auto object-contain"
        />
      ) : (
        <div className="flex items-center gap-2.5">
          <FallbackIcon className="w-6 h-6" style={{ color: client.accentHex }} strokeWidth={1.75} />
          <span className="font-mono text-sm font-semibold" style={{ color: client.accentHex }}>
            {client.shortCode}
          </span>
        </div>
      )}
    </div>
  );
}
