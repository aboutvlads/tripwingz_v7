"use client";

import { Calendar, Clock } from 'lucide-react';

interface DealPricingProps {
  price: string;
  originalPrice: string;
  date: string;
}

export function DealPricing({ price, originalPrice, date }: DealPricingProps) {
  const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
  const numericOriginal = parseInt(originalPrice.replace(/[^0-9]/g, ''));
  const discountPercentage = Math.round(((numericOriginal - numericPrice) / numericOriginal) * 100);

  return (
    <div className="space-y-3">
      <div className="bg-[#E7FFE7] rounded-xl p-4">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-[#1C2833]">
            ${numericPrice}
          </span>
          <p className="text-sm text-gray-600 mt-1">
            {discountPercentage}% off (normally ${numericOriginal}+)
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-400" />
          <div>
            <p className="text-xs text-gray-500">Travel Period</p>
            <p className="text-sm font-medium">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-green-600">
          <Clock className="h-3.5 w-3.5" />
          <span>Price will last 2+ days</span>
        </div>
      </div>
    </div>
  );
}