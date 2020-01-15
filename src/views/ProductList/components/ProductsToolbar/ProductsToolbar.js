import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//material işevleri
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import InputAdornment from '@material-ui/core/InputAdornment';

//material icons
import EditIcon from '@material-ui/icons/Edit';

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  HeRe: {
    margin: '5%'
  },
  EditButton: {
    marginTop: '-8%',
    marginLeft: '3%',
    position: 'relative'
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const ProductsToolbar = props => {
  const [open, setOpen] = React.useState(false);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    this.props.uploadImage(formData);
  };

  const handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button className={classes.importButton}>Import</Button>
        <Button className={classes.exportButton}>Export</Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleClickOpen}
        >
          Ürün Ekle
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Ürün Ekleyin</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Lütfen ürün eklerken sorun çıkmaması için Tüm fieldları doldurun, aksi takdirde sorun çıkabilir!
          </DialogContentText>
            <hr className={classes.HeRe} />
            <input type="file" id="imageInput" hidden="hidden" onChange={handleImageChange} />
            <Avatar alt="Remy Sharp" src="/images/products/product_3.png" className={classes.large} />
            <Button tip="Profil fotoğrafınızı Güncelleyin" className={classes.EditButton} onClick={handleEditPicture}>
              <EditIcon />
            </Button>
            <TextField
              autoFocus
              margin="dense"
              id="urunadi"
              label="Ürün Adı"
              type="urunadi"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="urunfiyat"
              label="Ürün Fiyatı"
              InputProps={{
                startAdornment: <InputAdornment position="start">₺</InputAdornment>,
              }}
              type="number"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="urunaciklama"
              label="Ürün Açıklaması"
              type="urunaciklama"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Iptal
          </Button>
            <Button onClick={handleClose} color="primary">
              Ekle
          </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Ürün Arayın"
        />
      </div>
    </div>
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string
};

export default ProductsToolbar;
