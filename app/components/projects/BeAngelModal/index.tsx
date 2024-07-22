"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Spinner
} from "@nextui-org/react";
import { Button } from "@/app/components/Button";
import CustomModal from "../Forms/ProjectForm/Modals/CustomModal";
import { useProjectStore } from "../_store/store";
import css from "./index.module.scss";
import { getAvailableToClaimTokensByUser } from "@/services/onchain/onchain-service";
import { useAccount } from "wagmi";
import { useBeAngel } from "@/services/hooks/useBeAngel";
import { useRefund } from "@/services/hooks/useRefund";
import { useClaim } from "@/services/hooks/useClaim";


interface BeAngelModalProps {
  onChainId: number | undefined;
  symbol: string | undefined;
  tokenPrice: number | undefined;
}

const ethSchema = z
  .number()
  .min(0.001, { message: "Minimum amount is 0.001 ETH" });

export const BeAngelModal: React.FC<BeAngelModalProps> = ({
  onChainId,
  symbol,
  tokenPrice,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isMainTab } = useProjectStore();
  const [ethValue, setEthValue] = useState<string>("");
  const [tokenAmount, setTokenAmount] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [claimable, setClaimable] = useState<string>('0')
  const {isLoadingAngel, beAngel} = useBeAngel()
  const {isLoadingRefund, refund} = useRefund()
  const {isLoadingClaim, claim} = useClaim()



  const tokenSymbol = symbol ?? "n/a";
  const validId = onChainId ?? 0;
  const price = tokenPrice ?? 0;

  const account = useAccount()

  const toastOptions: ToastOptions = {
    style: {
      backgroundColor: "#272726",
      color: "#FFF",
    },
    progressStyle: {
      backgroundColor: "#FCFC03",
    },
  };


  const handleEthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setEthValue(value);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (validId && account.address) {
          const claimSizeBig = await getAvailableToClaimTokensByUser(validId, account.address);
          const claimSize = claimSizeBig / (10 ** 18)
          setClaimable(claimSize.toString());
        }
      } catch (error) {
        console.error(error);
        setClaimable("n/a")
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [validId, account.address]);

  useEffect(() => {
    if (ethValue === "") {
      setTokenAmount("");
      setError("");
      return;
    }

    const ethValueNumber = parseFloat(ethValue);
    const parseResult = ethSchema.safeParse(ethValueNumber);
    if (parseResult.success && price > 0) {
      setError("");
      const amount = ethValueNumber / price;
      setTokenAmount(amount.toFixed(2));
    } else {
      setTokenAmount("");
      if (!parseResult.success) {
        setError(parseResult.error.errors[0].message);
      }
    }
  }, [ethValue, price]);


  return (
    <div className={css.modal}>
      <ToastContainer style={{marginTop: '80px'}} />
      {isMainTab ? (
        <>
          <Button className="mr-40" onClick={onOpen}>
            BE AN ANGEL
          </Button>
          <CustomModal isOpen={isOpen} onClose={onClose}>
            <>
              <ModalHeader className={css.modalHeader}>
                Enter your seed amount :
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
                    style={{
                      padding: "0 0 0 10px",
                    }}
                  />
                  <label htmlFor="eth" className={css.labelEth}>
                    ETH
                  </label>
                </div>
                {error && <div className="text-xs text-red-500">{error}</div>}
                <div>
                  <input
                    id="frst"
                    type="text"
                    className={css.inputFrst}
                    readOnly
                    value={tokenAmount}
                  />
                  <label htmlFor="frst" className={css.labelFrst}>
                    {tokenSymbol}
                  </label>
                </div>
              </ModalBody>
              <ModalFooter className={css.modalFooter}>
                <Button size="xs" onClick={onClose} className={css.btnLater}>
                  later
                </Button>
                <Button
                  size="s"
                  className="ml-2 scale-85"
                  disabled={isLoadingAngel}
                  onClick={() => beAngel(validId, ethValue, onClose)}
                >
                  {isLoadingAngel ? 
                    <Spinner 
                      size='md' 
                      classNames={{
                        circle2: 'border-b-[#FCFC03]', 
                        circle1: 'border-b-[#FCFC03]'
                      }} 
                    /> : 'Let’s DO it'
                  }
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
            <Button
              disabled={isLoadingRefund}
              size="s"
              className="ml-14"
              onClick={() => refund(validId)}
            >
              {isLoadingRefund ? 
                <Spinner 
                  size='md' 
                  classNames={{
                    circle2: 'border-b-[#FCFC03]',
                    circle1: 'border-b-[#FCFC03]'
                  }} 
                /> : 'REFUND ETH'
              }
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
                    defaultValue={claimable}
                    readOnly
                  />
                  <label htmlFor="frst" className={css.labelFrst}>
                    {tokenSymbol}
                  </label>
                </div>
              </ModalBody>
              <ModalFooter className={css.modalFooter}>
                <Button size="xs" onClick={onClose} className={css.btnLater}>
                  later
                </Button>
                <Button size="s" className="ml-4" disabled={isLoadingClaim} onClick={() => claim(validId, onClose)}>
                  {isLoadingClaim ? 
                    <Spinner 
                      size='md' 
                      classNames={{
                        circle2: 'border-b-[#FCFC03]',
                        circle1: 'border-b-[#FCFC03]'
                      }} 
                    /> : 'Yes, i need my tokens'
                  }
                </Button>
              </ModalFooter>
            </>
          </CustomModal>
        </>
      )}
    </div>
  );
};
