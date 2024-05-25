export default function Logo({
    height: h = 100,
    width: w = 100
}) {
    return (
        <img
            src="/images/logo.svg"
            alt="0ep Logo"
            style={{ height: `${h}px`, width: `${w}px` }}
        />
    )
}