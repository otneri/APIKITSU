import { BtnFechar } from "../pages/home/Home.stld";

import Proptypes from "prop-types";

export const BotaoClose = ({ children, handleClick, type }) => {
    return (
      <BtnFechar onClick={handleClick} type={type}>
        {children}
      </BtnFechar>
    );
  };

  BotaoClose.propTypes = {
    children: Proptypes.node.isRequired,
    handleClick: Proptypes.func,
    type: Proptypes.string,
  };