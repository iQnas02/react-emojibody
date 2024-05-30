import React, { useState } from 'react';
import './App.css';

const heads = ["🥸", "😇", "🥹", "😶", "‍🌫️", "👶", "👩‍", "🦰", "🧑", "👨‍", "🦳", "👳", "😈", "🎃", "😡"];
const body = ["🎽", "🥋", "💓", "♟", "♖", "💝", "🩺", "🥼", "👗", "👘", "🥻"];
const hands = ["🪚", "⛏", "🔦", "💪", "🤳", "🫸", "🫷", "💪", "🏼", "🤳", "🏼", "🫷", "🏼", "🫸", "🏼", "👍", "🏻", "🤛🏻"];
const pants = ["🩳", "🩲", "👖"];
const feats = ["🦶", "👟", "👞", "🥾", "🥿", "👠", "👡", "👢"];

function App() {
    const [selectedHead, setSelectedHead] = useState(heads[0]);
    const [selectedBody, setSelectedBody] = useState(body[0]);
    const [selectedLeftHand, setSelectedLeftHand] = useState(hands[0]);
    const [selectedRightHand, setSelectedRightHand] = useState(hands[1]);
    const [selectedPants, setSelectedPants] = useState(pants[0]);
    const [selectedLeftFoot, setSelectedLeftFoot] = useState(feats[0]);
    const [modelName, setModelName] = useState('');
    const [finishedModels, setFinishedModels] = useState([]);

    const handleFinish = () => {
        if (modelName.trim()) {
            const newModel = {
                name: modelName,
                head: selectedHead,
                body: selectedBody,
                leftHand: selectedLeftHand,
                rightHand: selectedRightHand,
                pants: selectedPants,
                leftFoot: selectedLeftFoot,
            };
            setFinishedModels([...finishedModels, newModel]);
            setModelName('');
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="emFinished gap-3">
                    <h1>Emoji list</h1>
                    <h1>Finished</h1>
                </div>
                <div className="emoji-section">
                    <h2>Heads</h2>
                    <ul>
                        {heads.map((emoji, index) => (
                            <li key={index} style={{fontSize: '2rem', cursor: 'pointer'}}
                                onClick={() => setSelectedHead(emoji)}>
                                {emoji}
                            </li>
                        ))}
                    </ul>
                    <h2>Body</h2>
                    <ul>
                        {body.map((emoji, index) => (
                            <li key={index} style={{fontSize: '2rem', cursor: 'pointer'}}
                                onClick={() => setSelectedBody(emoji)}>
                                {emoji}
                            </li>
                        ))}
                    </ul>
                    <h2>Hands</h2>
                    <ul>
                        {hands.map((emoji, index) => (
                            <li
                                key={index}
                                style={{fontSize: '2rem', cursor: 'pointer'}}
                                onClick={() => index % 2 === 0 ? setSelectedLeftHand(emoji) : setSelectedRightHand(emoji)}
                            >
                                {emoji}
                            </li>
                        ))}
                    </ul>
                    <h2>Pants</h2>
                    <ul>
                        {pants.map((emoji, index) => (
                            <li key={index} style={{fontSize: '2rem', cursor: 'pointer'}}
                                onClick={() => setSelectedPants(emoji)}>
                                {emoji}
                            </li>
                        ))}
                    </ul>
                    <h2>Feet</h2>
                    <ul>
                        {feats.map((emoji, index) => (
                            <li
                                key={index}
                                style={{fontSize: '2rem', cursor: 'pointer'}}
                                onClick={() => setSelectedLeftFoot(emoji)}
                            >
                                {emoji}
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
            <main className="App-header">
                <div className="human-body">
                    <div className="head">{selectedHead}</div>
                    <div className="torso">
                        <div className="arm left-arm">{selectedLeftHand}</div>
                        <div className="body">{selectedBody}</div>
                        <div className="arm right-arm">{selectedRightHand}</div>
                    </div>
                    <div className="legs">
                        <div className="leg left-leg">{selectedPants}</div>
                    </div>
                    <div className="feet">
                        <div className="foot left-foot">{selectedLeftFoot}</div>
                    </div>
                    <div className="modelFinisher">
                        <input type="text" placeholder="model name" value={modelName}
                               onChange={(e) => setModelName(e.target.value)}/>
                        <button onClick={handleFinish}>Add to Finished</button>
                    </div>
                </div>

            </main>
            <div className="finished-models">
                {finishedModels.map((model, index) => (
                    <div key={index} className="finished-model">

                        <div className="human-body">
                            <h3 className="modelName">{model.name}</h3>
                            <div className="head">{model.head}</div>
                            <div className="torso">
                                <div className="arm left-arm">{model.leftHand}</div>
                                <div className="body">{model.body}</div>
                                <div className="arm right-arm">{model.rightHand}</div>
                            </div>
                            <div className="legs">
                                <div className="leg left-leg">{model.pants}</div>
                            </div>
                            <div className="feet">
                                <div className="foot left-foot">{model.leftFoot}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
