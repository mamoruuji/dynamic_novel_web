import { useState, useMemo } from 'react'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers'
import { DateValidationError } from '@mui/x-date-pickers/models'
import { format } from 'date-fns'

export const DatePicker = ({ label, name, value, onChange }) => {
  const [error, setError] = useState<DateValidationError | null>(null)

  const handleInputChange = (value: string | null) => {
    if (!value || isNaN(value)) {
      setError('invalidDate')
      onChange(null)
    } else {
      setError(null)
      onChange(value)
    }
  }

  const errorMessage = useMemo(() => {
    switch (error) {
      case 'disableFuture':
      case 'invalidDate': {
        return '年月日を指定してください。日付指定無しとして検索します。'
      }
      default: {
        return ''
      }
    }
  }, [error])

  return (
    <MuiDatePicker
      label={label}
      disableFuture
      name={name}
      value={value}
      onChange={(value) => handleInputChange(value)}
      inputFormat='yyyy年MM月dd日'
      mask='____年__月__日'
      onError={(newError) => setError(newError)}
      slotProps={{
        textField: {
          helperText: errorMessage,
        },
        toolbar: { toolbarFormat: 'yyyy年 MM月 dd日', hidden: false },
        field: { clearable: true },
      }}
    />
  )
}
