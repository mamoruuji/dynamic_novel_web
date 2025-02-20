'use client'

import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers'
import { DateValidationError } from '@mui/x-date-pickers/models'
import { useMemo,useState } from 'react'

export const DatePicker = ({ name, label, onChange, value }) => {
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
      name={name}
      disableFuture
      label={label}
      onChange={(value) => handleInputChange(value)}
      value={value}
      inputFormat='yyyy年MM月dd日'
      mask='____年__月__日'
      onError={(newError) => setError(newError)}
      slotProps={{
        field: { clearable: true },
        textField: {
          helperText: errorMessage,
        },
        toolbar: { hidden: false, toolbarFormat: 'yyyy年 MM月 dd日' },
      }}
    />
  )
}
