// Link - Next
import Link from 'next/link'

// UseState - React
import React, { useState } from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Icons - React Icons
import { MdDashboard } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";

// Components UI- Reactstrap
import { Tooltip } from 'reactstrap';

// CSS
import Style from '../styles/SideBar.module.css';

TooltipItem.propTypes = {
  item: PropTypes.string
};

function TooltipItem(props) {
  const { item } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
      <Tooltip
        placement={'right'}
        isOpen={tooltipOpen}
        target={'tooltip' + item}
        toggle={toggle}
      >
        {item + " Desenhos"}
      </Tooltip>
  );
}

export default function SideBar() {
  return (
    <section className={Style.sideBar}>
      <ul>
        <li id="tooltipListar">
          <Link href="/">
            <MdDashboard />
          </Link>
          <TooltipItem item={'Listar'} />
        </li>
        <li id="tooltipCadastrar">
          <Link href="/cadastro">
            <FaPencilRuler />
          </Link>
          <TooltipItem item={'Cadastrar'} />
        </li>
      </ul>
    </section>
  )
}