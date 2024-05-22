"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Button } from "@/app/components/Button";
import css from "./index.module.scss";

export const BeAngelModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>BE AN ANGEL</Button>
      <Modal
        size="4xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className={css.modal}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={css.title}>
                Inter your seed amount :
              </ModalHeader>
              <ModalBody>
                <div>
                  <input id="eth" type="text" className={css.inputEth} />
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
              <ModalFooter className="flex">
                <Button onClick={onClose}>later</Button>
                <Button onClick={onClose}>Let’s DO it</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
