import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function LinearCheck() {
    const [countOfProgress,
        setCountOfProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCountOfProgress((oldProgress) => {
                if (100 === oldProgress) return 0;
                return Math.min(oldProgress + Math.random() * 10, 100);
            });
        }, 499);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <h4>How to show LinearProgress in ReactJS?</h4>
            <LinearProgress variant="determinate"
                            value={countOfProgress} />
        </div>
    );
}