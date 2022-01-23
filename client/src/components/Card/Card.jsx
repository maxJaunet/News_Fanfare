import { Paper } from "@mui/material";
import MembersTable from "../Admin/MembersTable/MembersTable";
import UploadImageForm from "../Admin/UploadImageForm/UploadImageForm";
import CardTitle from "../CoreUI/CardTitle/CardTitle";
import Events from "../Events/Events";
import ImageLibrary from "../ImageLibrary";
import UserProfile from "../Users/UserProfile";

const Card = ({contentType, loadedData, cardTitle}) => {
   return (
    <Paper sx={{padding: '1rem 0'}}>
      <CardTitle element="h4" label={cardTitle} />
        {contentType === 'userProfile' && <UserProfile user={loadedData} />}
        {contentType === 'membersTable' && <MembersTable members={loadedData} />}
        {contentType === 'events' && <Events events={loadedData} />}
        {contentType === 'imageLibrary' && <ImageLibrary images={loadedData} />}
        {contentType === 'uploadImageForm' && <UploadImageForm />}
    </Paper>
  )
};

export default Card;