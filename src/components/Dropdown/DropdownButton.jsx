'use client'

import { useState } from "react";
import Button from "../Button"
import Dropdown from ".";

import './dropdown.scss';

export default function DropdownButton({
    click = () => {},
    type = "blank",
    custom,
    items,
    children,
}) {

    const [state, setState] = useState(false);

    return (
        <div className="dropdown-wrapper">
            <Button
                type={type}
                click={() => {
                    click();
                    setState(!state);
                }}
                custom={custom}
            >
                {children}
            </Button>

            { state && <Dropdown items={items} set={setState} />}
        </div>
    )
}