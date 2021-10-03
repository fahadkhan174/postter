import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';

import sunFill from '@iconify/icons-eva/sun-fill';
import moonFill from '@iconify/icons-eva/moon-fill';
// material
import { IconButton } from '@mui/material';
// components

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const toggleMode = () => {
    setOpen(!open);
  };

  return (
    <IconButton
      ref={anchorRef}
      onClick={toggleMode}
      color={open ? 'primary' : 'default'}
      sx={{
        padding: 0,
        width: 44,
        height: 44
      }}
    >
      <Icon icon={open ? sunFill : moonFill} width={20} height={20} />
    </IconButton>
  );
}
