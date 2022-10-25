import styled from "styled-components/macro";

const H4 = styled.h4`
    font-weight: bold;
    margin: 2px;
`;

const P = styled.p`
    margin-top: 2px;
    margin-bottom: 0;
`;

const IMG = styled.img`
    height: 1.2em;
    transform: translateY(20%);
`;

function ProcessCardText({ cardText }: { cardText: string }): JSX.Element {
    let firstTrigger: string = "";
    let secondTrigger: string | undefined;

    const triggerMatch = cardText.match(/(?<=^|\/\s)\*\*[^*/]+?\*\*/g);

    if (triggerMatch !== null) {
        firstTrigger = triggerMatch[0].replace(/\*|\//g, "");
        if (triggerMatch.length > 1)
            secondTrigger = triggerMatch[1].replace(/\*|\//g, "");
    }

    const icons = [
        "CROWN",
        "LETTER",
        "MONEY",
        "SWORDS",
        "HORSE",
        "MOVEMENT",
        "UNDYING",
        "OASIS",
        "LONGRANGE",
    ];

    const newText = cardText
        .split(/(?<=^|\/\s)\*\*[^*/]+?\*\*/g)
        .filter((val) => val)
        .map((val) =>
            val
                .replace(/\//g, "")
                .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                .replace(/\*([^*]+)\*/g, "<em>$1</em>")
                .replace(/^\n\n|^\r\n/g, "")
                .replace(/\n\n/g, "<br />")
                .replace(/^\n/g, "")
                .replace(/\n/g, "<br />")
        );

    const processText = (text: string): JSX.Element => {
        let textArr = text.split(/\[|\]/g);
        textArr = textArr.map((text) => {
            if (text.startsWith("<em>") && !text.includes("</em>"))
                text = text + "</em>";
            else if (text.startsWith("<strong>") && !text.includes("</strong>"))
                text = text + "</strong>";
            else if (text.endsWith("</em>") && !text.includes("<em>"))
                text = "<em>" + text;
            else if (text.endsWith("</strong>") && !text.includes("<strong"))
                text = "<strong>" + text;
            return text;
        });

        return (
            <>
                {textArr.map((text, ind) =>
                    icons.includes(text) ? (
                        <IMG
                            key={ind}
                            alt={text}
                            src={`./${text}.png`}
                            title={text}
                            style={{
                                filter: ` ${
                                    text !== "MOVEMENT" && text !== "LONGRANGE"
                                        ? "invert(100%)"
                                        : "none"
                                }`,
                            }}
                        />
                    ) : (
                        <span
                            dangerouslySetInnerHTML={{ __html: text }}
                            key={ind}
                        ></span>
                    )
                )}
            </>
        );
    };

    return (
        <>
            <H4>{processText(firstTrigger)}</H4>
            <P>{processText(newText[0])}</P>
            {secondTrigger !== undefined && (
                <>
                    <hr />
                    <H4>{processText(secondTrigger)}</H4>
                    {newText[1] !== undefined && (
                        <P>{processText(newText[1])}</P>
                    )}
                </>
            )}
        </>
    );
}

export default ProcessCardText;
