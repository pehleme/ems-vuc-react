import { PropsWithChildren } from "react";

interface Props {
  backText?: string;
  onClickBack?: () => void;
}

export type HeaderProps = PropsWithChildren<Props>;
