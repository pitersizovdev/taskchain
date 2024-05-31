import styles from "./header.module.css";
import lm from "@/assets/svg/logomobile.svg";
import lt from "@/assets/svg/logotext.svg";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image className={styles.logoMobile} src={lm}></Image>
          <Image className={styles.logoText} src={lt}></Image>
        </Link>
      </div>
      <div className={styles.nav}>
        <Link href="#faq">
          <Button className={"stock"}>О нас</Button>
        </Link>
        <Link href="/feedback">
          <Button className={"stock"}>Контакты</Button>
        </Link>
        <Link href="/messenger">
          <Button className={"accent"}> Мессенджер</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
