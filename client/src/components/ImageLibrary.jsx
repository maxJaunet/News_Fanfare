import { ImageList, ImageListItem } from '@mui/material';
import { useState } from 'react';
import UploadImageForm from './Admin/UploadImageForm/UploadImageForm';
import ActionButtons from './CoreUI/ActionButtons';

const ImageLibrary = ({images}) => {
  const [hideStatus, setHideStatus] = useState(true);
  const [editScreenOn, setEditScreenOn] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const onOpenEditScreen = (obj) => {
    setEditScreenOn(true);
    setSelectedFile(obj);
    console.log(selectedFile)
  }
  return (
    <div>
      <ImageList
          sx={{ height: 250 }}
          cols={3} rowHeight={130}
      >
      {images && images.map(pic => {
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
            onOpenEditScreen={onOpenEditScreen}
            targetID={pic._id}
            hidden={hideStatus}
            alignment="vertical"
            targetComponent="images" 
            />
        </ImageListItem>
      )})
      } 
    </ImageList>
    {editScreenOn && 
      <UploadImageForm initialData={selectedFile} />
    }
  </div>
  )
}

export default ImageLibrary;