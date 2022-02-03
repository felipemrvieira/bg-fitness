import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import header from "./header.module.scss";

const ITEM_HEIGHT = 48;

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={header.headerContainer}>
      <div className={header.headerContent}>
        <Link href="/" passHref={true}>
          <div className={header.logoContainer}>
            <Image
              src="/images/logo.png"
              alt="Logo BG Fitness"
              // width="250"
              // height="58.33"
              layout="fill"
            />
          </div>
        </Link>{" "}
        <nav>
          <Link href="/">
            <a>Início</a>
          </Link>
          <Link href="/">
            <a>Conheça</a>
          </Link>
          <Link
            href="http://www.bgfitness.com.br/BG_MATRICULA/"
            passHref={true}
          >
            <a>Matricule-se</a>
          </Link>
        </nav>
        <IconButton
          className={header.iconButton}
          aria-label="more"
          id="long-button"
          aria-controls="long-menu"
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <span className={"material-icons " + header.buttonIcon}>
            &#xe5d4;
          </span>
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          <Link href="/" passHref={true}>
            <MenuItem selected onClick={handleClose}>
              Início
            </MenuItem>
          </Link>
          <Link href="/" passHref={true}>
            <MenuItem selected onClick={handleClose}>
              Conheça
            </MenuItem>
          </Link>
          <Link
            href="http://www.bgfitness.com.br/BG_MATRICULA/"
            passHref={true}
          >
            <MenuItem selected onClick={handleClose}>
              Matricule-se
            </MenuItem>
          </Link>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
