import React from 'react';

function MailTo(props) {
    return (
        <a href={`mailto:${props.email}?subject=${
            props.subject ? encodeURIComponent(props.subject) : ''
            }&body=${
            props.body ? encodeURIComponent(props.body) : ''
            }`}>
                {props.children}
        </a>
    );
}
export default MailTo;