import { useAtom } from 'jotai'
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { setFont, radioAnimations } from 'src/libs/util'

import { radioAnimationTriggerAtomFamily } from '@/states/dialog-state.ts'

interface RadioGroupFieldProps {
  label: string
  options: { id: int; name: string; value: string }[]
  name: string
  selectedValue?: string
  onChange: (value: string) => void
}

export const RadioGroupField = ({
  label,
  options,
  name,
  selectedValue,
  onChange,
}: RadioGroupFieldProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        name={name}
        value={selectedValue}
        onChange={(event) => {
          onChange(event.target.value)
        }}
      >
        {options.map((item, index) => {
          const animation = radioAnimations[item.value] || radioAnimations.none
          const [radioAnimationTrigger, setRadioAnimationTrigger] = useAtom(
            radioAnimationTriggerAtomFamily(item.value),
          )
          return (
            <FormControlLabel
              key={index}
              value={item.id}
              control={<Radio sx={{ color: `var(--${item.value})` }} />}
              label={
                <motion.div
                  animate={
                    radioAnimationTrigger
                      ? animation.clicked
                      : animation.initial
                  }
                  onClick={() => setRadioAnimationTrigger(true)}
                  onAnimationComplete={() => setRadioAnimationTrigger(false)}
                >
                  <Box>
                    <Typography className={setFont(item.value)}>
                      {item.name}
                    </Typography>
                  </Box>
                </motion.div>
              }
              sx={{ color: `var(--${item.value})` }}
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}
