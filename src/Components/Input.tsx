import React from 'react'
type InputProps = {
    value: string;
    onHandleChange: (e: React.MouseEvent<HTMLInputElement>) => void;
}
export default function Input(props: InputProps) {
    return (
        <input value={props.value} onChange={(e) => props.onHandleChange}></input>
    )
}
