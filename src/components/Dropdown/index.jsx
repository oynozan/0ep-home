'use client'

import { useRef } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export default function Dropdown({
    items = [],
    set
}) {

    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef, () => set(false));

    return (
        <div className="dropdown" ref={wrapperRef}>
            {items.map((item, i) => {
                return (
                    <div key={i} className="item">{item}</div>
                )
            })}
        </div>
    )
}