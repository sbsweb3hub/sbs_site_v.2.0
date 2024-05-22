import AddAvatar from './AddAvatar/AddAvatar'
import AddBackground from './AddBackground/AddBackground';

const AddImage: React.FC<{ imageUrl?: string, disabled?: boolean, backgroundImageUrl?: string, }> = ({ imageUrl, backgroundImageUrl, disabled }) => {

  return (
    <div className='relative flex flex-col items-center'>
      <div className='absolute z-[1] top-[91px] left-[100px]'>
        <AddAvatar imageUrl={imageUrl!} disabled={disabled} />
      </div>
      <AddBackground backgroundImageUrl={backgroundImageUrl!} disabled={disabled!} />
    </div>
  );
}

export default AddImage
