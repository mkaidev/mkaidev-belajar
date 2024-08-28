import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DropDownProps {
  options: { label: string; value: string }[];
  value?: string;
  onChange: (value: string) => void;
}

export const DropDown = ({ options, onChange, value }: DropDownProps) => {
  return (
    <div className="w-full">
      <Select onValueChange={onChange} defaultValue={value}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select category..." />
        </SelectTrigger>
        <SelectContent>
          {options.length > 0 &&
            options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
};
