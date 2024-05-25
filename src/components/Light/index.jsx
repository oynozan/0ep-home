import './light.scss';

export default function Light({
    color,
    size,
    px,
    py
}) {
    return (
        <div
            className="light"
            style={{
                top: py,
                left: px,
                boxShadow: `0 0 ${size} ${size} ${color}`
            }}
        ></div>
    )
}