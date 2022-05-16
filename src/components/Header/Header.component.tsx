import { HeaderProps } from "./Header.types";
import { HeaderView } from "./HeaderView.component";

function Header(rest: HeaderProps) {
  return <HeaderView {...rest} />;
}

export { Header };
