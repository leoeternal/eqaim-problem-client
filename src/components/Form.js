import React, { useContext } from "react";
import { FormFieldInput } from "../styles/form/FormStyling";
import { FormWrapper, FormFieldWrapper } from "../styles/wrapper/Wrapper";
import { FormFieldTitle, ErrorText } from "../styles/typography/Typography";
import { StyledButton } from "../styles/button/ButtonStyling";
import { SumContext } from "../App";

function Form({ jsonData }) {
  const sumContext = useContext(SumContext);
  const {
    firstNumber,
    secondNumber,
    setFirstNumber,
    setSecondNumber,
    submitData,
  } = sumContext;
  return (
    <FormWrapper>
      <FormFieldWrapper>
        <FormFieldTitle>First Number:</FormFieldTitle>
        <div>
          <FormFieldInput
            value={firstNumber}
            onChange={(e) => setFirstNumber(Number(e.target.value))}
            type="number"
          />
          {jsonData?.errors?.map((error, index) => {
            return (
              <ErrorText key={index}>
                {error?.fieldId === "firstNumber" ? error?.error : null}
              </ErrorText>
            );
          })}
        </div>
      </FormFieldWrapper>
      <FormFieldWrapper>
        <FormFieldTitle>Second Number:</FormFieldTitle>
        <div>
          <FormFieldInput
            type="number"
            onChange={(e) => setSecondNumber(Number(e.target.value))}
            value={secondNumber}
          />
          {jsonData?.errors?.map((error, index) => {
            return (
              <ErrorText key={index}>
                {error?.fieldId === "secondNumber" ? error?.error : null}
              </ErrorText>
            );
          })}
        </div>
      </FormFieldWrapper>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <StyledButton
          variant={jsonData?.loader ? "disabled" : "enabled"}
          onClick={jsonData?.loader ? null : submitData}
        >
          Generate Steps
        </StyledButton>
      </div>
    </FormWrapper>
  );
}

export default Form;
