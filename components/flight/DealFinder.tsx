"use client";

interface DealFinderProps {
  name: string;
  bio: string;
  avatar: string;
  deals: number;
}

export function DealFinder({ name, bio, avatar, deals }: DealFinderProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-sm text-gray-500 mb-3">Deal found by</p>
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
        />
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">{name}</p>
            <span className="text-xs bg-black/5 px-2 py-1 rounded-full">
              {deals} deals shared
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-0.5">{bio}</p>
        </div>
      </div>
    </div>
  );
}