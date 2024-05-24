"use client";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Button } from "@/app/components/Button";
import CustomModal from "../Forms/ProjectForm/Modals/CustomModal";
import { useProjectStore } from "../_store/store";
import css from "./index.module.scss";

export const BeAngelModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isMainTab } = useProjectStore();
  
  return (
    <div className={css.modal}>
      {isMainTab ? (
        <>
          <Button className="mr-40" onClick={onOpen}>
            BE AN ANGEL
          </Button>
          <CustomModal isOpen={isOpen} onClose={onClose}>
            <>
              <ModalHeader className={css.modalHeader}>
                Inter your seed amount :
              </ModalHeader>
              <ModalBody className={css.modalBody}>
                <div>
                  <input
                    autoFocus
                    id="eth"
                    type="text"
                    className={css.inputEth}
                  />
                  <label htmlFor="eth" className={css.labelEth}>
                    ETH
                  </label>
                </div>
                <div>
                  <input id="frst" type="text" className={css.inputFrst} />
                  <label htmlFor="frst" className={css.labelFrst}>
                    $FRST
                  </label>
                </div>
              </ModalBody>
              <ModalFooter className={css.modalFooter}>
                <Button size="xs" onClick={onClose}>
                  later
                </Button>
                <Button size="s" className="ml-4" onClick={onClose}>
                  Let’s DO it
                </Button>
              </ModalFooter>
            </>
          </CustomModal>
        </>
      ) : (
        <>
          <div className="mr-14">
            <Button size="s" onClick={onOpen}>
              CLAIM TOKENS
            </Button>
            <Button disabled={true} size="s" className="ml-14">
              REFUND ETH
            </Button>
          </div>
          <CustomModal isOpen={isOpen} onClose={onClose}>
            <>
              <ModalHeader className={css.modalHeader}>
                Now you can claim:
              </ModalHeader>
              <ModalBody className={css.modalBody}>
                <div className="mt-8">
                  <input
                    disabled
                    id="frst"
                    type="text"
                    className={css.inputFrst}
                    defaultValue="650,000"
                  />
                  <label htmlFor="frst" className={css.labelFrst}>
                    $FRST
                  </label>
                </div>
              </ModalBody>
              <ModalFooter className={css.modalFooter}>
                <Button size="xs" onClick={onClose}>
                  later
                </Button>
                <Button size="s" className="ml-4" onClick={onClose}>
                  Yes, i need my tokens
                </Button>
              </ModalFooter>
            </>
          </CustomModal>
        </>
      )}
    </div>
  );
};
