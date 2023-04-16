import React from 'react';

interface RedButtonProps {
    title: string;
    style: string;
    onClick: () => void;
}

interface CSSProperties {
    [key: string]: string | number;
}




const Button: React.FC<RedButtonProps> = ({title, style, onClick}) => {

    let buttonStyles: CSSProperties = {
        marginTop: '10px',
        marginBottom: '20px',
        border: 'none',
        backgroundColor: '#ef4049',
        fontWeight: '600',
        color: '#ffffff',
        textAlign: 'center',
        padding: '0.7rem 1rem',
        letterSpacing: '1.5px',
        fontSize: '0.7em',
        cursor: 'pointer',
        borderRadius: '0px'
    }


    if (style === 'form-button') {
        buttonStyles = {
            marginTop: '0',
            marginBottom: '0',
            border: 'none',
            backgroundColor: '#ef4049',
            fontWeight: '600',
            color: '#ffffff',
            textAlign: 'center',
            padding: '0.7rem 6rem',
            letterSpacing: '1.5px',
            fontSize: '0.7em',
            cursor: 'pointer',
            borderRadius: '0px'
        }
    }

    return (
        <button style={buttonStyles} title={title} onClick={onClick}>
            {title}
        </button>
    );
}

export default Button;