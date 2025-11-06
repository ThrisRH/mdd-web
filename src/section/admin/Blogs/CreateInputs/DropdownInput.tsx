import React, { useEffect, useRef, useState } from "react";

import { SocialMediaPlatform } from "@/config/social-media-dropdown";
import {
  Box,
  DropdownInputWrapper,
  Item,
  List,
} from "@/styles/components/inputs/Input.styles";
import { Text } from "@/styles/theme/temp-typo";
import DropdownIC from "@/assets/svg/arrow-down";

type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
};

const DropdownInput = ({ label, value, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);
    return () => document.addEventListener("mousedown", handleClickOutSide);
  }, []);

  return (
    <DropdownInputWrapper>
      <Text $variant="body5" $size={12} $color="#979797" $weight="500">
        {label}
      </Text>
      <Box
        onClick={() => {
          setIsOpen(!isOpen);
          console.log(isOpen);
        }}
      >
        {value || "-- Chọn nền tảng mạng xã hội --"}
        <DropdownIC fill={"#979797"} />
      </Box>
      <Text></Text>
      {isOpen ? (
        <List>
          {SocialMediaPlatform.map((item, index) => (
            <Item
              key={index}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
            >
              {item}
            </Item>
          ))}
        </List>
      ) : null}
    </DropdownInputWrapper>
  );
};

export default DropdownInput;
