"use client";
import { Dot, LoaderWrapper } from "@/section/client/main/loading/styled";

export default function Loading() {
  return (
    <LoaderWrapper>
      <Dot $delay="0s" />
      <Dot $delay="0.2s" />
      <Dot $delay="0.4s" />
    </LoaderWrapper>
  );
}
