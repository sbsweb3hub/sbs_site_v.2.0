"use client";
import React, {useState} from "react";
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
import { beAnAngel, readNewStartDateFromChain, readTokenAddressFromChain, getDataForProgressBar, claimTokens, refundEth } from "@/services/onchain/onchain-service";

interface BeAngelModalProps {
  onChainId: number | undefined,
  symbol: string | undefined
}


export const BeAngelModal: React.FC<BeAngelModalProps> = ({onChainId, symbol}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isMainTab } = useProjectStore();
  const [ethValue, setEthValue] = useState<string>("");

  const handleEthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEthValue(e.target.value);
  };

  const tokenSymbol = symbol ?? 'n/a'
  const validId = onChainId ?? 0

  const handlePrice = async () => {
    
    if (validId !== undefined) {
      try {
        console.log(getDataForProgressBar(validId))
        // Дополнительные действия после успешного вызова, если нужно
      } catch (err) {
        console.error("Failed to become an angel:", err);
      }
    }
  }
  
  const handleBeAnAngel = async () => {
    if (validId !== undefined) {
      try {
        await beAnAngel(validId, ethValue);
        // Дополнительные действия после успешного вызова, если нужно
      } catch (err) {
        console.error("Failed to become an angel:", err);
      }
      onClose();
    } else {
      console.error("onChainId is undefined");
    }
  };

  const handelClaim = async () => {
    if (validId !== undefined) {
      try {
        await claimTokens(validId);
        // Дополнительные действия после успешного вызова, если нужно
      } catch (err) {
        console.error("Failed to claim", err);
      }
      onClose();
    } else {
      console.error("onChainId is undefined");
    }
  }

  const handleRefund = async () => {
    if (validId !== undefined) {
      try {
        await refundEth(validId);
        // Дополнительные действия после успешного вызова, если нужно
      } catch (err) {
        console.error("Failed to refund", err);
      }
      onClose();
    } else {
      console.error("onChainId is undefined");
    }
  }

  return (
    <div className={css.modal}>
      {isMainTab ? (
        <>
          <button onClick={handlePrice} className="w-[100px] h-[50px] bg-white text-black">
            check price
          </button>
          <Button className="mr-40"
            onClick={onOpen}
          >
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
                    value={ethValue}
                    onChange={handleEthChange}
                  />
                  <label htmlFor="eth" className={css.labelEth}>
                    ETH
                  </label>
                </div>
                <div>
                  <input id="frst" type="text" className={css.inputFrst} />
                  <label htmlFor="frst" className={css.labelFrst}>
                    {tokenSymbol}
                  </label>
                </div>
              </ModalBody>
              <ModalFooter className={css.modalFooter}>
                <Button size="xs" onClick={onClose}>
                  later
                </Button>
                <Button size="s" className="ml-4" onClick={handleBeAnAngel}>
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
            <Button disabled={false} size="s" className="ml-14" onClick={handleRefund}>
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
                <Button size="s" className="ml-4" onClick={handelClaim}>
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
