import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";
import { Filter } from "@/types";
import { OPTIONS } from "../consts";

type FilterControlsProps = {
  current: Filter;
  onChange: (filter: Filter) => void;
};

export const FilterControls = ({ current, onChange }: FilterControlsProps) => {
  const handleToggleButton = (
    _: React.MouseEvent<HTMLElement>,
    newFilter: Filter | null
  ) => {
    if (!newFilter) return;
    onChange(newFilter);
  };

  return (
    <Box mb={2}>
      <ToggleButtonGroup
        value={current}
        exclusive
        onChange={handleToggleButton}
      >
        {Object.values(OPTIONS).map((value) => (
          <ToggleButton key={value} value={value}>
            {value}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};
