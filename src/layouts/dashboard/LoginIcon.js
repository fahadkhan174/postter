import { useNavigate } from 'react-router-dom';

import { Icon } from '@iconify/react';
import lockFill from '@iconify/icons-eva/lock-fill';
// material
import { IconButton } from '@mui/material';
// components

// ----------------------------------------------------------------------

export default function LoginIcon() {
  const navigate = useNavigate();

  return (
    <IconButton
      color="default"
      onClick={() => navigate('/login')}
      sx={{
        padding: 0,
        width: 44,
        height: 44
      }}
    >
      <Icon icon={lockFill} width={20} height={20} />
    </IconButton>
  );
}
