import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Controller, useFormContext, ControllerRenderProps } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
}

function StarRating({ value, onChange }: StarRatingProps) {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Button
          key={index}
          variant="ghost"
          onClick={() => onChange(index + 1)}
          className="p-0 m-0"
          type="button"
        >
          <Star
            className={`w-7 h-7 fill-current ${index < value ? "text-primary" : "text-slate-300"}`}
          />
        </Button>
      ))}
    </div>
  );
}

interface RatingFieldProps {
  name: string;
  label: string;
  defaultValue?: string | number | undefined;
}

export function RatingField({ name, label, defaultValue = 0 }: RatingFieldProps) {
  const { control } = useFormContext();

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }: { field: ControllerRenderProps }) => (
          <FormControl>
            <StarRating value={field.value} onChange={field.onChange} />
          </FormControl>
        )}
      />
      <FormMessage />
    </FormItem>
  );
}
