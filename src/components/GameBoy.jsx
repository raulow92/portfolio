import "./GameBoy.css";

const GameBoy = (props) => {
    return (
        <div {...props}>
            <div className="shell">
                <div className="lines-container">
                    <div className="left-line"></div>
                    <div className="right-line"></div>
                    <div className="center-line"></div>
                </div>

                <div className="screen-frame">
                    <div className="screen-top">
                        <div className="top-left"></div>
                        <div className="top-center">
                            DOT MATRIX WITH STEREO SOUND
                        </div>
                        <div className="top-right"></div>
                    </div>
                    <div className="screen"></div>
                    <div className="circle"></div>
                    <div className="battery">BATTERY</div>
                </div>

                <div className="d-pad-container">
                    <div className="d-pad-1"></div>
                    <div className="d-pad-2"></div>
                    <div className="d-pad-circle"></div>
                </div>

                <div className="purple-buttons">
                    <div className="a-button"></div>
                    <div className="b-button"></div>
                </div>

                <div className="gray-button-1">
                    <div className="select"></div>
                </div>

                <div className="gray-button-2">
                    <div className="start"></div>
                </div>

                <div className="speaker-container">
                    <div className="speaker"></div>
                    <div className="speaker"></div>
                    <div className="speaker"></div>
                    <div className="speaker"></div>
                    <div className="speaker"></div>
                    <div className="speaker"></div>
                </div>
            </div>
        </div>
    );
};

export default GameBoy;
