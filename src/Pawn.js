import React from 'react'

function Pawn({id, isColor}) {
    var pawnColor =
      isColor === "white" ? "pawn-".concat("black") : "pawn-".concat("white");
    return <div className={`cell ${isColor} ${pawnColor}`}>{""}</div>;
}

export default Pawn


