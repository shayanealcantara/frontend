import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { SideBarButton } from '../../../components';
import { Img } from '../../../assets';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedId, setSelectedId] = useState(-1);

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <SideBarButton 
          icon={Img.MONOMETRO} 
          selected={1 === selectedId}
          onClick={() => setSelectedId(1)}
        >
          Definir rotação
        </SideBarButton>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle>Definir rotação</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="axes-x"
            label="Eixo X (em graus)"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            id="axes-y"
            label="Eixo Y (em graus)"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Rotacionar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
