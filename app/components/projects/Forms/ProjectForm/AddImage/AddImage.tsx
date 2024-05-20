import AddAvatar from './AddAvatar/AddAvatar'
import AddBackground from './AddBackground/AddBackground';

const AddImage: React.FC = () => {

  return (
    <div className='relative flex flex-col items-center'>
      <div className='absolute z-[1] top-[91px] left-[100px]'>
        <AddAvatar />
      </div>
      <AddBackground />
    </div>
  );
}

export default AddImage
