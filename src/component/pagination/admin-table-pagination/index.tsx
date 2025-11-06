"use client";
import {
  RowContainer,
  TableBodyCell,
} from "@/section/admin/styles/Page.styles";
import React from "react";

import { Text } from "@/styles/theme/temp-typo";
import { PageNumber, PaginationContainer } from "../styled";
import { PaginationButton, PaginationControls } from "./styled";

interface Props {
  currentPage: number;
  totalPages: number;
  handleChangePage: (pageNumber: number) => void;
}

const TablePaginationBar = ({
  currentPage,
  totalPages,
  handleChangePage,
}: Props) => {
  return (
    <RowContainer>
      <TableBodyCell colSpan={6}>
        <PaginationContainer>
          <PaginationControls>
            <PaginationButton
              disabled={currentPage === 1}
              onClick={() => handleChangePage(currentPage - 1)}
            >
              Trước
            </PaginationButton>

            {Array.from({ length: totalPages }, (_, i) => (
              <PageNumber
                key={i}
                $active={currentPage === i + 1}
                onClick={() => handleChangePage(i + 1)}
              >
                <Text $variant="body2">{i + 1}</Text>
              </PageNumber>
            ))}

            <PaginationButton
              disabled={currentPage === totalPages}
              onClick={() => handleChangePage(currentPage + 1)}
            >
              Sau
            </PaginationButton>
          </PaginationControls>
        </PaginationContainer>
      </TableBodyCell>
    </RowContainer>
  );
};

export default TablePaginationBar;
