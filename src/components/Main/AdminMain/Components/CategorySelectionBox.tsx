import React from "react";
import { SelectionBoxContainer } from "../styles/Input.styles";
import { ButtonContainer, FormFooter } from "../styles/Page.styles";
import Button from "@/components/Button/button";

const CategorySelectionBox = ({
  setIsCateSelectionOpen,
}: {
  setIsCateSelectionOpen: (status: boolean) => void;
}) => {
  return (
    <SelectionBoxContainer>
      h
      <FormFooter>
        <ButtonContainer>
          <Button onClickFunc={() => setIsCateSelectionOpen(false)}>
            Xong
          </Button>
        </ButtonContainer>
      </FormFooter>
    </SelectionBoxContainer>
  );
};

export default CategorySelectionBox;
