import React from 'react';
import './button.css'

interface RedButtonProps {
    title: string;
    buttonStyles: string;
    onClick?: () => void;
}




const Button: React.FC<RedButtonProps> = ({title, buttonStyles, onClick}) => {

    return (
        <>
            <button className={buttonStyles} title={title} onClick={onClick}>
                {title}
            </button>
        </>
    );
}

export default Button;