import { ImageList, ImageListItem } from '@mui/material';
import { useState } from 'react';
import ActionButtons from './CoreUI/ActionButtons';

const ImageLibrary = (props) => {
    const [hideStatus, setHideStatus] = useState(true);
    const images = props.imageList;
  return (
    <ImageList
        sx={{ height: 250 }}
        cols={3} rowHeight={130}
        onMouseOver={() => setHideStatus(false)}
        onMouseLeave={() => setHideStatus(true)}
    >
    {images.map((item, index) => (
      <ImageListItem key={index}>
        <img
            src={item.file.path.slice(16)}
            alt={item.desc}
            loading="lazy"
        />
        <ActionButtons hidden={hideStatus} alignment="vertical" targetComponent="image" />
      </ImageListItem>
    ))}
  </ImageList>
  )
}

export default ImageLibrary;