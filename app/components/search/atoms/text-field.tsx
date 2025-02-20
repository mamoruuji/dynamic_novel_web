import {
  Autocomplete,
  Chip,
  createFilterOptions,
  Input,
  TextField as MuiTextField,
} from '@mui/material'

const filter = createFilterOptions()

export const TextField = ({
  id,
  name,
  itemKey,
  label,
  onChange,
  options,
  value,
}) => {
  return (
    <Autocomplete
      id={id}
      multiple
      limitTags={10}
      options={options || []}
      filterOptions={(options, params) => {
        const filtered = filter(options, params)

        const { inputValue } = params
        const isExisting = options.some(
          (option) =>
            option === inputValue ||
            option.name === inputValue ||
            option.inputValue === inputValue,
        )
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            name: `追加 "${inputValue}"`,
            inputValue,
          })
        }

        return filtered
      }}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option
        }
        return option.name || option.inputValue || ''
      }}
      freeSolo
      clearOnBlur
      value={value}
      onChange={(event, newValue) => {
        const uniqueValues = []
        newValue.forEach((item) => {
          const val =
            typeof item === 'string' ? item : item.inputValue || item.name
          if (!uniqueValues.includes(val)) {
            uniqueValues.push(val)
          }
        })
        onChange(uniqueValues)
      }}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props
        return (
          <li key={key} {...optionProps}>
            {option.name || option.inputValue || option}
          </li>
        )
      }}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            key={option}
            label={
              typeof option === 'string'
                ? option
                : option.name || option.inputValue
            }
          />
        ))
      }}
      renderInput={(params) => {
        return (
          <>
            <MuiTextField
              {...params}
              key={itemKey}
              label={label}
              variant='outlined'
            />
            <Input
              name={name}
              value={value.join(',')}
              sx={{ display: 'none' }}
            />
          </>
        )
      }}
    />
  )
}
