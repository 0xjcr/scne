import { useEffect, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => { 
  cloudinaryRef.current = window.cloudinary;
  widgetRef.current = cloudinaryRef.current.createUploadWidget({
    cloudName: 'dqfsyl5rv',
    uploadPreset: 'scnescne1'
  }, function(error, result) {
console.log(result);
  });
}, [])
  
return (
  <IconButton onClick={() => widgetRef.current.open()} aria-label="delete">
        <AddAPhotoIcon />
    
        </IconButton>
  )
}

export default UploadWidget;