import DropdownButton from '../Dropdown/DropdownButton';
import Button from '../Button';
import Logo from '../Logo';
import './header.scss';

export default function Header() {
    return (
        <header>
            <div className="container">
                <a href="/">Home</a>
                <a href="#how-it-works">How it Works</a>
                <a href="#usage">Usage</a>
                <a href="#roadmap">Roadmap</a>
                <a href="#faq">FAQ</a>
                <a href="#contact">Contact</a>
                <Button
                    href="https://app.0ep.net"
                    type="main"
                >
                    Log in
                </Button>
            </div>
            <div className="mobile">
                <Logo />
                <DropdownButton
                    items={[
                        <a key={1} href="/">Home</a>,
                        <a key={2} href="#how-it-works">How it Works</a>,
                        <a key={3} href="#usage">Usage</a>,
                        <a key={4} href="#roadmap">Roadmap</a>,
                        <a key={5} href="#faq">FAQ</a>,
                        <a key={6} href="#contact">Contact</a>,
                        <a key={7} href="https://app.0ep.net" style={{ color: "var(--second)" }}>Login</a>
                    ]}
                >
                    <div>
                        <img
                            src="/images/icons/hamburger.svg"
                            alt="Hamburger Menu"
                            style={{ height: "40px" }}
                        />
                    </div>
                </DropdownButton>
            </div>
        </header>
    )
}