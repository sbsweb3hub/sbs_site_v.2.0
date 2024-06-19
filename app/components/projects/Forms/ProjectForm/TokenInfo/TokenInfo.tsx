import { ProjectType } from "@/types";
import { Input, Tooltip } from "@nextui-org/react";
import { useTokenForm } from "./_hooks/useTokenForm";

const TokenInfo = ({
  disabled,
  project,
}: {
  disabled?: boolean;
  project?: ProjectType;
}) => {
  const {
    isFocused,
    handleChange,
    handleFocus,
    isInvalid,
    tokenPriseResult,
    maxTokenAmountResult,
    minTokenAmountResult,
  } = useTokenForm(project);

  return (
    <div className="flex flex-col ml-[117px]">
      <p className="text-[26px] text-[#000] font-semibold mb-[46px]">
        Token information
      </p>
      <div className="flex items-start gap-[127px]">
        <div className="flex flex-col gap-[33px]">
          <Input
            labelPlacement="outside"
            variant="faded"
            label="Token name"
            placeholder="Token name"
            type="string"
            name="tokenName"
            className="w-[360px] h-[43px] text-[#000]"
            {...(disabled && { isDisabled: true })}
            defaultValue={project?.tokenName}
          />
          <Input
            labelPlacement="outside"
            variant="faded"
            label="Total token supply"
            placeholder="e.g. 100,000,000"
            type="string"
            name="tokenSupply"
            className="w-[360px] h-[43px] text-[#000]"
            min="0"
            onValueChange={handleChange("tokenSupply")}
            isInvalid={isInvalid.tokenSupply}
            color={isInvalid.tokenSupply ? "danger" : "success"}
            errorMessage={isInvalid.tokenSupply && "Should be greater than 0"}
            {...(disabled && { isDisabled: true })}
            defaultValue={project ? String(project.tokenSupply) : undefined}
          />
          <Tooltip
            color="success"
            content={maxTokenAmountResult}
            placement="top-end"
            isOpen={isFocused.maxTokenForSeed}
          >
            <Input
              labelPlacement="outside"
              variant="faded"
              label="Maximum tokens amount for seed round"
              placeholder="e.g. 10,000,000"
              className="w-[360px] h-[43px] text-[#000]"
              type="string"
              name="maxTokenForSeed"
              onValueChange={handleChange("maxTokenForSeed")}
              isInvalid={isInvalid.maxTokenForSeed}
              color={isInvalid.maxTokenForSeed ? "danger" : "success"}
              errorMessage={
                isInvalid.maxTokenForSeed &&
                "Should be less than Total token supply"
              }
              min="0"
              onFocus={() => handleFocus("maxTokenForSeed", true)}
              onBlur={() => handleFocus("maxTokenForSeed", false)}
              {...(disabled && { isDisabled: true })}
              defaultValue={
                project ? String(project.maxTokenForSeed) : undefined
              }
            />
          </Tooltip>
        </div>
        <div className="flex flex-col gap-[33px]">
          <Input
            labelPlacement="outside"
            variant="faded"
            label="Symbol of token"
            placeholder="e.g. ETH"
            type="string"
            name="tokenSymbol"
            className="w-[360px] h-[43px] text-[#000]"
            {...(disabled && { isDisabled: true })}
            defaultValue={project?.tokenSymbol}
          />
          <Tooltip
            color="success"
            content={tokenPriseResult}
            placement="top-end"
            isOpen={isFocused.tokenPrice}
          >
            <Input
              labelPlacement="outside"
              variant="faded"
              label="Token price [$]"
              placeholder="e.g. 0.005 $"
              type="string"
              name="tokenPrice"
              onValueChange={(value) => handleChange("tokenPrice")(value)}
              className="w-[360px] h-[43px] text-[#000]"
              min="0"
              isInvalid={isInvalid.tokenPrice}
              color={isInvalid.tokenPrice ? "danger" : "success"}
              errorMessage={isInvalid.tokenPrice && "Should be greater than 0"}
              onFocus={() => handleFocus("tokenPrice", true)}
              onBlur={() => handleFocus("tokenPrice", false)}
              {...(disabled && { isDisabled: true })}
              defaultValue={project ? String(project.tokenPrice) : undefined}
            />
          </Tooltip>
          <Tooltip
            color="success"
            content={minTokenAmountResult}
            placement="top-end"
            isOpen={isFocused.minTokenForSeed}
          >
            <Input
              labelPlacement="outside"
              variant="faded"
              label="Minimum tokens amount for seed round"
              placeholder="e.g. 1,000,000"
              className="w-[360px] h-[43px] text-[#000]"
              type="string"
              name="minTokenForSeed"
              isInvalid={isInvalid.minTokenForSeed}
              color={isInvalid.minTokenForSeed ? "danger" : "success"}
              errorMessage={
                isInvalid.minTokenForSeed &&
                "Should be less than Maximum tokens amount"
              }
              onValueChange={handleChange("minTokenForSeed")}
              min="0"
              onFocus={() => handleFocus("minTokenForSeed", true)}
              onBlur={() => handleFocus("minTokenForSeed", false)}
              {...(disabled && { isDisabled: true })}
              defaultValue={
                project ? String(project.minTokenForSeed) : undefined
              }
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default TokenInfo;
