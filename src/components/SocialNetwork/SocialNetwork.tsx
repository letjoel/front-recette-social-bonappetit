import React from 'react'

type Props = {text: string}

const SocialNetwork = (props: Props) => {
    return (
        <div>{props.text}</div>
    )
};

export default SocialNetwork