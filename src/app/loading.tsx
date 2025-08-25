"use client";
import { Dot, LoaderWrapper } from "@/components/Main/Loading.styles";

export default function Loading() {
  return (
    <LoaderWrapper>
      <Dot $delay="0s" />
      <Dot $delay="0.2s" />
      <Dot $delay="0.4s" />
    </LoaderWrapper>
  );
}
