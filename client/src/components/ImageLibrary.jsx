import { ImageList, ImageListItem } from '@mui/material';
import { useState } from 'react';
import ActionButtons from './CoreUI/ActionButtons';

const ImageLibrary = ({images}) => {
  const [hideStatus, setHideStatus] = useState(true);  
  
  return (
    <ImageList
        sx={{ height: 250 }}
        cols={3} rowHeight={130}
    >
    {images.map(pic => {
      return (
      pic.file && 
      <ImageListItem key={pic._id}
        onMouseOver={() => setHideStatus(false)}
        onMouseLeave={() => setHideStatus(true)}
      >
        {pic.file.path ?
        <img
            
            src={pic.file.path.slice(16)}
            alt={pic.desc ? pic.desc : "..."}
            loading="lazy"
        />
        :
        <p>loading error - no path found</p>
        }
        <ActionButtons
          hidden={hideStatus}
          alignment="vertical" 
          />
      </ImageListItem>
    )})
    } 
  </ImageList>
  )
}

export default ImageLibrary;