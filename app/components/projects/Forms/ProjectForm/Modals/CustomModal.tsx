import React from "react";
import '@/app/components/projects/Forms/ProjectForm/Modals/index.css'
import { 
    Modal,
    ModalContent,
    ModalBody
} from "@nextui-org/react";

interface CustomModalProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void;
  }

  const CustomModal: React.FC<CustomModalProps> = ({ isOpen, children, onClose }) => {
    return (
      <>
         <Modal
            size="3xl"
            backdrop="opaque"
            isOpen={isOpen}
            onClose={onClose}
            className="clip-container"
            classNames={{
                closeButton: 'mr-[40px] mt-[10px] z-20 w-[30px] h-[30px]'
            }}
            placement="auto"
        >
            <ModalContent>
                {(onClose) => (
                    <>  
                        <svg className="clip-border" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 727 344" fill="none">
                            <path d="M175 44.5H175.529L175.941 44.1685L216.529 11.5H705.5V219.873L668.885 256H585.5H584.935L584.51 256.373L543.935 292H41.5V63.6736L63.0703 44.5H175Z" stroke="#FCFC03" stroke-width="3"/>
                        </svg>
                        <ModalBody className="flex flex-col items-center z-10">
                           {children}
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default CustomModal;