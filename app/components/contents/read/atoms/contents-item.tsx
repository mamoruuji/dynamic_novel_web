import { Box, ListItem, ListItemButton, ListItemText } from '@mui/material'

type ContentsItemProps = {
  id: string
  name: string
  href?: string
}

export const ContentsItem = ({ id, name, href }: ContentsItemProps) => {
  const [type, typeId] = id.split(':')

  return (
    <ListItem>
      <Box
        sx={{
          alignItems: 'center',
          display: 'inline-block',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <ListItemButton>
            <ListItemText>
              <Box component='a' id={id} href={href}>
                {name}
              </Box>
            </ListItemText>
          </ListItemButton>
        </Box>
      </Box>
    </ListItem>
  )
}
