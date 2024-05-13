import React from "react";

interface H2BarsProps {
    hrColor: string;
    textColor: string;
    text: string;
}

const H2Bars = (props: H2BarsProps) => {
    const { hrColor } = props;
    const { textColor } = props;
    const { text } = props;

    return (
        <>
            <div className="flex items-center">
                <hr className={`grow border-b-1 ${hrColor}`} />
                <h2
                    className={`px-6 text-6xl font-bold font-title ${textColor}`}
                >
                    {text}
                </h2>
                <hr className={`grow border-b-1 ${hrColor}`} />
            </div>
        </>
    );
};

export default H2Bars;
