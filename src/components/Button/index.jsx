import './button.scss';

export default function Button({
    click = () => {},
    type = "blank",
    target = "_self",
    href = "",
    custom,
    disabled = false,
    children,
    onMouseLeave,
    onMouseEnter,
}) {
    return (
        <>
        { href ? (
            // Link
            <a
                href={href}
                className={`button ${type} ${disabled ? 'disabled' : ''}`}
                style={custom}
                target={target}
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
            >
                {children}
            </a>
        ) : (
            // Button
            <button
                onClick={() => { if (!disabled) click() }}
                className={`button ${type} ${disabled ? 'disabled' : ''}`}
                style={custom}
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
            >
                {children}
            </button> 
        )}
        </>
    )
}