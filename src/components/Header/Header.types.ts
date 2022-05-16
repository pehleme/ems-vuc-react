import { PropsWithChildren } from "react";

interface Props {
  backText?: string;
  backRoute?: string;
}

export type HeaderProps = PropsWithChildren<Props>;
