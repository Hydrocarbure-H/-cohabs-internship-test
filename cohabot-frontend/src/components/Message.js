import React from 'react';

function Message({message, isUser})
{
    return (
        <div
            className={`p-2 my-2 rounded-2xl ${isUser ? 'bg-cohabyellow text-cohabblack self-end' : 'bg-cohabbeige text-black'}`}>
            {message}
        </div>
    );
}

export default Message;
