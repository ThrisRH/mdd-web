"use client";
import React from "react";
import { PageNumber, PaginationContainer } from "./PaginationBar.styles";
import Arrow from "@/assets/svg/arrowdown";
import { Body2 } from "../Typography/Body.styles";

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
      <button
        className="rotate-90"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <Arrow fill="#000" />
      </button>

      {pages.map((page) => (
        <PageNumber
          key={page}
          $active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          <Body2 color="#000">{page}</Body2>
        </PageNumber>
      ))}

      <button
        className="-rotate-90"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <Arrow fill="#000" />
      </button>
    </PaginationContainer>
  );
};

export default PaginationBar;
