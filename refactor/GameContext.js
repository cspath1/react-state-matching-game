import React from "react";

const GameContext = React.createContext({
    numTiles: 36,
    playing: false,
    handleNumTileChange: () => { return; },
    startPlaying: () => { return; }
});

export default GameContext;