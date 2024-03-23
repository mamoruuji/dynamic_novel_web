import {
  Autocomplete,
  Chip,
  Input,
  TextField as MuiTextField,
} from '@mui/material'

export const TextField = ({ id, name, value, onChange, itemKey, label }) => {
  return (
    <Autocomplete
      id={id}
      multiple
      options={[]}
      freeSolo
      value={value}
      onChange={(event, value) => {
        onChange(value)
      }}
      renderOption={(props, option) => (
        <li {...props} key={option}>
          {option}
        </li>
      )}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip {...getTagProps({ index })} key={option} label={option} />
        ))
      }
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
