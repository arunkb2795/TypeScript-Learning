import React from 'react'
type ButtonProps = {
    label: string;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.handleClick}>{props.label}</button>
    )
}
