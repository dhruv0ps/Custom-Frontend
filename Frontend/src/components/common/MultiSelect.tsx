import * as Checkbox from '@radix-ui/react-checkbox';
import * as Popover from '@radix-ui/react-popover';
import { CheckIcon, ChevronDownIcon, Search } from 'lucide-react';
import * as React from 'react';

export interface MultiSelectProps {
    options: { value: string; label: string }[];
    selectedValues: string[];
    onChange: (values: string[]) => void;
    placeholder?: string;
    label?: string;
}

export function MultiSelect({
    options,
    selectedValues,
    onChange,
    placeholder = 'Select',
    label,
}: MultiSelectProps) {
    const [open, setOpen] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleCheckboxChange = (value: string) => {
        if (selectedValues.includes(value)) {
            onChange(selectedValues.filter((item) => item !== value));
        } else {
            onChange([...selectedValues, value]);
        }
    };

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='flex flex-col space-y-3'>
            {label && <label className="block text-sm font-medium mb-1">{label}</label>}
            <div>
                <Popover.Root open={open} onOpenChange={setOpen}>
                    <Popover.Trigger asChild>
                        <button
                            className="inline-flex items-center justify-between w-full px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-primary"
                        >
                            <span className="truncate text-sm">
                                {selectedValues.length > 0
                                    ? selectedValues.map((value) =>
                                        options.find((option) => option.value === value)?.label,
                                    ).join(', ')
                                    : placeholder}
                            </span>
                            <ChevronDownIcon className="w-5 h-5 ml-2 text-gray-400" />
                        </button>
                    </Popover.Trigger>
                    <Popover.Content
                        align="start"
                        className="z-10 mt-1 w-[340px] bg-white border border-gray-200 rounded-md shadow-lg"
                    >
                        <div className="p-2 w-full">
                            <div className="relative">
                                <Search className="absolute left-1 top-1 h-4 w-4 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-6 pr-2 py-0 border-0 border-gray-300 rounded-md focus:outline-none text-sm"
                                />
                            </div>
                            <hr className='my-2' />
                            <div className="max-h-60 overflow-y-auto">
                                {filteredOptions.length > 0 ? (
                                    filteredOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            className="flex items-center mb-2 last:mb-0"
                                        >
                                            <Checkbox.Root
                                                id={option.value}
                                                checked={selectedValues.includes(option.value)}
                                                onCheckedChange={() => handleCheckboxChange(option.value)}
                                                className="w-4 h-4 border border-gray-300 rounded"
                                            >
                                                <Checkbox.Indicator>
                                                    <CheckIcon className="w-3 h-3 text-primary m-auto" />
                                                </Checkbox.Indicator>
                                            </Checkbox.Root>
                                            <label
                                                htmlFor={option.value}
                                                className="ml-2 text-sm text-gray-700"
                                            >
                                                {option.label}
                                            </label>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500">No results found</p>
                                )}
                            </div>
                        </div>
                    </Popover.Content>
                </Popover.Root>
            </div>
        </div>
    );
}
