import React from 'react'

function Cell({color, id, Piece}) {
    return (
        <div className="cell" >
            <Piece id={id} isColor={color} />
        </div>
    )
}

export default Cell
