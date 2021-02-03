import React from "react";

export default function EmojiContainer({emojiList}) {


    const emojiList1 = emojiList.map((emoji, index) => {

        if (!emojiList) { return (<p>Loading...</p>)}

        return (
            <div key={index} >
                <div>{emoji.symbol}</div>
                <div>{emoji.title || emoji.keywords}</div>
            </div>

        );
    });

    return (
        <div className='emojiContainer'>
            <div>
            {emojiList1}
            </div>
        </div>
    );


};