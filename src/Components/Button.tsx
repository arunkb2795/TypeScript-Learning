import React from 'react'
type ButtonProps = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.handleClick}>Click</button>
    )
}
