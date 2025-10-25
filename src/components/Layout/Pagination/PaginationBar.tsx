"use client";
import React from "react";
import {
  ArrowButton,
  PageNumber,
  PaginationContainer,
} from "./PaginationBar.styles";
import Arrow from "@/assets/svg/arrowdown";
import { Text } from "@/styles/theme/typography";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
const PaginationBar = ({ currentPage, totalPages, onPageChange }: Props) => {
  const windowSize = 5;
  let start = Math.max(1, currentPage - Math.floor(windowSize / 2));
  let end = start + windowSize - 1;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - windowSize + 1);
  }

  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  return (
    <PaginationContainer>
      <ArrowButton
        $rotate={90}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <Arrow fill="#000" />
      </ArrowButton>

      {pages.map((page) => (
        <PageNumber
          key={page}
          $active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          <Text $variant="body2" color="#000">
            {page}
          </Text>
        </PageNumber>
      ))}

      <ArrowButton
        $rotate={-90}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <Arrow fill="#000" />
      </ArrowButton>
    </PaginationContainer>
  );
};

export default PaginationBar;
