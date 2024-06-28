import { useRef, useState } from "react";
import Xarrow from "react-xarrows";

import useOnScreen from '../../hooks/useOnScreen';
import useWindowDimensions from '../../hooks/useWindowDimensions';

// Components
import Button from "../../components/Button";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Light from "../../components/Light";

import './home.scss';

export default function Home() {

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);
    const { width } = useWindowDimensions();

    const [roadmap, setRoadmap] = useState("2024-q4");

    return (
        <div id="home">
            <Header />

            <main>
                {/* Light Components */}
                <Light color="#5518ed" size="500px" px="300px" py="100px" />
                <Light color="#fefefe" size="400px" px="calc(100% - 100px)" py="500px" />
                <Light color="rgba(90, 90, 250, .8)" size="600px" px="50%" py="2000px" />
                <Light color="#5518ed90" size="400px" px="200px" py="calc(100% - 200px)" />

                <nav>
                    <div className="nav-text">
                        <h1>A new era in communication</h1>
                        <p>
                            <span>0ep Protocol</span> is an anonymous communication channel that is secured with&nbsp;
                            <a href="https://zkpass.org/" style={{ color: '#c5ff4a' }}>zkPass</a>
                        </p>
                    </div>
                    <div className="nav-img">
                        <a href="#how-it-works">
                            <img src="/images/logo-vector.gif" alt="Logo vector" />
                        </a>
                    </div>
                </nav>

                <div id="how-it-works">
                    <div className="how">
                        <p id="how-1">
                            <span>0ep Protocol</span> is an anonymous layer to our daily life communication platforms.
                        </p>
                    </div>
                    <div className="how">
                        <p id="how-2" ref={ref}>
                            With the zero-knowledge proof method of <a href="https://zkpass.org/" style={{ color: '#c5ff4a' }}>zkPass</a>,&nbsp;
                            <span>0ep Protocol</span> can verify the ownership of social platforms to determine whether you are a real user or not.
                            <br/><br/>
                            So, we're able to prevent spam messages on public chats to some extent, unlike other Web3 chat applications.
                        </p>
                    </div>
                    <div className="how">
                        <p id="how-3">
                            The verification process is prohibitively simple.&nbsp;
                            <a href="https://chromewebstore.google.com/detail/zkpass-transgate/afkoofjocpbclhnldmmaphappihehpma" style={{ color: '#c5ff4a' }}>zkPass Transgate</a> extension
                            opens the social platform in a new tab and wants you to complete the given task to verify your existence on the Internet.
                        </p>
                    </div>
                    <div className="how">
                        <p id="how-4">
                            And, that's it! Now you can use <span>0ep's zkChat</span> without providing any personal information. Your wallet address is your whole identity on <span>0ep</span>!
                        </p>
                    </div>
                </div>

                <div id="usage">
                    <h2>How to Use?</h2>

                    <p>Before you log in to <span>0ep Dashboard</span>, you need to verify your existence with a Web2 social media account.</p>
                    <p><a href="https://chromewebstore.google.com/detail/zkpass-transgate/afkoofjocpbclhnldmmaphappihehpma" style={{ color: '#c5ff4a' }}>zkPass Transgate</a> extension allows you to verify your account without your login credentials.</p>
                    <small>For now, it's only Discord.</small>
                    <div className="outer-container">
                        <div className="container">
                            <p>Verify your ownership</p>
                            <Button
                                href="https://app.0ep.net"
                                target="_blank"
                                type="purple"
                            >
                                <img src="/images/icons/discord-white.svg" alt="Discord" />
                                Start Verification
                            </Button>
                        </div>
                    </div>

                    <p>Next, you can get to the <a href="https://app.0ep.net">0ep Dashboard</a>. In the dashboard, you can import servers from Discord.</p>
                    <p>The imported servers will contain <span>0ep</span> users from the same server, but everybody will be anonymous.</p>

                    <img src="/images/usage-1.png" alt="0ep Usage - 1" />

                    <p>Also, you can send private messages to users by their wallet addresses.</p>
                    <p>There are some features that most of the Web2 platforms don't have like deleting all of your messages.</p>
                </div>

                <div id="roadmap">
                    <h2>Roadmap</h2>
                    <p>We have amazing plans for the future of <span>0ep Protocol</span></p>

                    <div className="roadmap-box">
                        <div className="list">
                            <div
                                onClick={() => setRoadmap("2024-q4")}
                                className={roadmap === "2024-q4" ? "active" : undefined}
                            >
                                2024 - Q4
                            </div>
                            <div
                                onClick={() => setRoadmap("2025-q1")}
                                className={roadmap === "2025-q1" ? "active" : undefined}
                            >
                                2025 - Q1/Q2
                            </div>
                            <div
                                onClick={() => setRoadmap("2025-q3")}
                                className={roadmap === "2025-q3" ? "active" : undefined}
                            >
                                2025 - Q3/Q4
                            </div>
                        </div>
                        <div className="desc">
                            { roadmap === "2024-q4" && (
                                <>
                                <p>For the last quarter of 2024, we aim to focus on technical improvements on <span>0ep Protocol</span> rather than the marketing or tokenization.</p>
                                <p>First goal is to make <span>0ep</span> a usable secure chat alternative as much as possible.</p>

                                <h4>TO-DO:</h4>
                                <ul>
                                    <li>More verification methods will be added. The priority is to deal with Google login.</li>
                                    <li>In addition to the import feature, the ability to create group chats</li>
                                    <li>Profile customization option</li>
                                    <li>Getting funded by Nibiru Builders Grants program</li>
                                    <li>Name Service support</li>
                                </ul>
                                </>
                            )}
                            { roadmap === "2025-q1" && (
                                <>
                                <p>In the first quarter of 2025, our main goal will be <span>tokenization</span>.</p>
                                <p>With the native token of 0ep Protocol, a marketing campaign can be managed easier.</p>
                                <p>The use field of a token on a chat application would be similar to what Discord and Telegram does: Premium features.</p>

                                <h4>TO-DO:</h4>
                                <ul>
                                    <li>Tokenization of <span>0ep Protocol</span></li>
                                    <li>NFT Integration for custom profile pictures</li>
                                    <li>Built-in DeFi support to exchange tokens, this improvement leads</li>
                                    <li>Coinmarketcap listing</li>
                                </ul>
                                </>
                            )}
                            { roadmap === "2025-q3" && (
                                <>
                                <p>Utility tokens and other improvements will make an agressive marketing campaign possible.</p>

                                <h4>TO-DO:</h4>
                                <ul>
                                    <li>Marketing campaign on Social Media</li>
                                    <li>Getting listed on at least one CEX</li>
                                </ul>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div id="faq">
                    <h2>FAQ</h2>

                    <h3>How can I be sure of 0ep's anonymity?</h3>
                    <p>This project is open-source: <a href="https://github.com/oynozan/0ep" style={{ color: '#c5ff4a' }}>github.com/oynozan/0ep</a>. You can go through the code and even contribute to it!</p>

                    <h3>Can I run 0ep on my own server?</h3>
                    <p>You can run <span>0ep</span> on your local or public server. This allows you to run your own <span>0ep instance</span> just for you and your friends. Follow the installation guide on the Github repository.</p>

                    <h3>What do I need to use 0ep Protocol?</h3>
                    <p>You need a <a href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" style={{ color: '#c5ff4a' }}>Metamask</a> wallet and <a href="https://chromewebstore.google.com/detail/zkpass-transgate/afkoofjocpbclhnldmmaphappihehpma" style={{ color: '#c5ff4a' }}>zkPass Transgate</a> extension on your Chrome browser.</p>

                    <h3>What is "importing" feature?</h3>
                    <p>Imagine there are users using <span>0ep Protocol</span> in a Discord server. When you import a server, you can join a chat with all of the other users in it. But this time, all of you are anonymous.</p>

                    <h3>The project is promising, how can I help?</h3>
                    <p>You can join our team to <span>BUIDL</span> something amazing. Send us an email at: <a href="mailto:contact@oynozan.com" style={{ color: '#c5ff4a' }}>contact@oynozan.com</a></p>
                </div>
            </main>

            <Footer />

            {/* Arrows */}
            {isVisible && (
                <>
                <Xarrow
                    start="how-1"
                    end="how-2"
                    startAnchor={width > 1100 ? "right" : "bottom"}
                    endAnchor={"top"}
                    path={width > 1100 ? "grid" : "smooth"}
                    gridBreak="100%"
                    strokeWidth={3}
                    showHead={false}
                    color="#fefefe34"
                />
                <Xarrow
                    start="how-2"
                    end="how-3"
                    startAnchor={width > 1100 ? "left" : "bottom"}
                    endAnchor={"top"}
                    path={width > 1100 ? "grid" : "smooth"}
                    gridBreak="100%"
                    strokeWidth={3}
                    showHead={false}
                    color="#fefefe34"
                />
                <Xarrow
                    start="how-3"
                    end="how-4"
                    startAnchor={width > 1100 ? "right" : "bottom"}
                    endAnchor={"top"}
                    path={width > 1100 ? "grid" : "smooth"}
                    gridBreak="100%"
                    strokeWidth={3}
                    showHead={false}
                    color="#fefefe34"
                />
                </>
            )}
        </div>
    )
}