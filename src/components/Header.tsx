import React from 'react'

interface Props {
    children?: string
}

export const Header = (props: Props) => {
    return (
        <h1>
            {props.children}
        </h1>
    )
}
