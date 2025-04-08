import React, { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  value: number[];
  onChange: (value: number[]) => void;
  label?: string;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step,
  value,
  onChange,
  label,
}) => {
  const [isDragging, setIsDragging] = useState<{ thumb1: boolean; thumb2: boolean }>({
    thumb1: false,
    thumb2: false,
  });

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={onChange}
        aria-label="Range slider"
      >
        <Slider.Track className="bg-gray-200 relative grow rounded-full h-1.5">
          <Slider.Range className="absolute bg-primary rounded-full h-full" />
        </Slider.Track>

        <Slider.Thumb
          className="block w-5 h-5 bg-primary rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          aria-label={`Minimum price: ${value[0]}`}
          onPointerDown={() => setIsDragging({ ...isDragging, thumb1: true })}
          onPointerUp={() => setIsDragging({ ...isDragging, thumb1: false })}
        >
          {isDragging.thumb1 && (
            <div className="absolute top-[-30px] left-[-10px] bg-gray-700 text-white text-xs p-1 rounded">
              ${value[0]}
            </div>
          )}
        </Slider.Thumb>

        <Slider.Thumb
          className="block w-5 h-5 bg-primary rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          aria-label={`Maximum price: ${value[1]}`}
          onPointerDown={() => setIsDragging({ ...isDragging, thumb2: true })}
          onPointerUp={() => setIsDragging({ ...isDragging, thumb2: false })}
        >
          {isDragging.thumb2 && (
            <div className="absolute top-[-30px] right-[-10px] bg-gray-700 text-white text-xs p-1 rounded">
              ${value[1]}
            </div>
          )}
        </Slider.Thumb>
      </Slider.Root>

      {/* <div className="mt-4 flex justify-between text-md font-medium">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div> */}
    </div>
  );
};
