export default function SvgBackground({
    duration = 300,
}: {
    duration?: number;
}) {
    return (
        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMaxYMax"
            width="100%"
            height="100%"
        >
            <defs>
                <radialGradient
                    id="Gradient1"
                    cx="50%"
                    cy="50%"
                    // fx="0.441602%"
                    fx="0.141602%"
                    fy="50%"
                    r=".5"
                >
                    <animate
                        attributeName="fx"
                        dur={Math.round(duration / 0.56666667) + 's'}
                        values="0%;3%;0%"
                        repeatCount="indefinite"
                    ></animate>
                    <stop offset="0%" stopColor="rgba(255, 0, 255, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(255, 0, 255, 0)"></stop>
                </radialGradient>
                <radialGradient
                    id="Gradient2"
                    cx="50%"
                    cy="50%"
                    // fx="2.68147%"
                    fx="1.68147%"
                    fy="50%"
                    r=".5"
                >
                    <animate
                        attributeName="fx"
                        dur={Math.round(duration * 0.39166667) + 's'}
                        values="0%;3%;0%"
                        repeatCount="indefinite"
                    ></animate>
                    <stop offset="0%" stopColor="rgba(255, 255, 0, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(255, 255, 0, 0)"></stop>
                </radialGradient>
                <radialGradient
                    id="Gradient3"
                    cx="50%"
                    cy="50%"
                    fx="0.836536%"
                    fy="50%"
                    r=".5"
                >
                    <animate
                        attributeName="fx"
                        // dur="21.5s"
                        dur={Math.round(duration * 0.35833333) + 's'}
                        values="0%;3%;0%"
                        repeatCount="indefinite"
                    ></animate>
                    <stop offset="0%" stopColor="rgba(0, 255, 255, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(0, 255, 255, 0)"></stop>
                </radialGradient>
                <radialGradient
                    id="Gradient4"
                    cx="50%"
                    cy="50%"
                    // fx="4.56417%"
                    fx="6.56417%"
                    fy="50%"
                    r=".5"
                >
                    <animate
                        attributeName="fx"
                        // dur="23s"
                        dur={Math.round(duration * 0.38333333) + 's'}
                        values="0%;5%;0%"
                        repeatCount="indefinite"
                    ></animate>
                    <stop offset="0%" stopColor="rgba(0, 255, 0, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(0, 255, 0, 0)"></stop>
                </radialGradient>
                <radialGradient
                    id="Gradient5"
                    cx="50%"
                    cy="50%"
                    // fx="2.65405%"
                    fx="2.05405%"
                    fy="50%"
                    r=".5"
                >
                    <animate
                        attributeName="fx"
                        // dur="24.5s"
                        dur={Math.round(duration * 0.40833333) + 's'}
                        values="0%;5%;0%"
                        repeatCount="indefinite"
                    ></animate>
                    <stop offset="0%" stopColor="rgba(0,0,255, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(0,0,255, 0)"></stop>
                </radialGradient>
                <radialGradient
                    id="Gradient6"
                    cx="50%"
                    cy="50%"
                    fx="0.981338%"
                    fy="50%"
                    r=".5"
                >
                    <animate
                        attributeName="fx"
                        // dur="25.5s"
                        dur={Math.round(duration * 0.245) + 's'}
                        values="0%;5%;0%"
                        repeatCount="indefinite"
                    ></animate>
                    <stop offset="0%" stopColor="rgba(255,0,0, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(255,0,0, 0)"></stop>
                </radialGradient>
            </defs>

            <rect
                // d="M52.8,-51.1C67.6,-38,78.2,-19,76.6,-1.6C74.9,15.7,61,31.4,46.2,46.2C31.4,61.1,15.7,75.1,1.9,73.2C-11.9,71.3,-23.7,53.4,-39.7,38.6C-55.6,23.7,-75.6,11.9,-80.7,-5.2C-85.9,-22.2,-76.3,-44.4,-60.3,-57.6C-44.4,-70.8,-22.2,-74.9,-1.6,-73.3C19,-71.7,38,-64.3,52.8,-51.1Z"
                // d="M35.7,-62C46.2,-55.8,54.6,-46.1,63.2,-35.1C71.9,-24.2,81,-12.1,83.4,1.4C85.9,15,81.9,30,72.7,40C63.5,50,49.1,55,36.1,61.9C23.1,68.7,11.6,77.3,-1.6,80.1C-14.8,82.9,-29.5,79.8,-41.2,72.2C-52.9,64.7,-61.6,52.6,-68.3,39.8C-75,27,-79.7,13.5,-78.4,0.7C-77.1,-12,-69.8,-24,-63.6,-37.7C-57.4,-51.3,-52.3,-66.6,-41.9,-72.9C-31.5,-79.1,-15.8,-76.4,-1.6,-73.7C12.6,-71,25.2,-68.3,35.7,-62Z"
                x="13.744%"
                y="1.18473%"
                width="200%"
                height="200%"
                fill="url(#Gradient1)"
                transform="rotate(334.41 50 50)"
            >
                <animate
                    attributeName="x"
                    // dur="20s"
                    dur={Math.round(duration * 0.3333) + 's'}
                    values="25%;0%;25%"
                    repeatCount="indefinite"
                ></animate>
                <animate
                    attributeName="y"
                    // dur="21s"
                    dur={Math.round(duration * 0.35) + 's'}
                    values="0%;25%;0%"
                    repeatCount="indefinite"
                ></animate>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    // dur="7s"
                    dur={Math.round(duration * 0.33) + 's'}
                    repeatCount="indefinite"
                ></animateTransform>
            </rect>
            <rect
                // d="M20.4,-36.2C29.6,-29.9,42.5,-31,56.1,-26.1C69.7,-21.3,83.9,-10.7,81.4,-1.5C78.9,7.8,59.6,15.5,45.6,19.6C31.6,23.6,22.8,24,16.1,29.4C9.4,34.9,4.7,45.4,-4.6,53.4C-13.9,61.3,-27.7,66.7,-34.5,61.3C-41.2,55.8,-40.9,39.6,-49.7,27.6C-58.5,15.6,-76.4,7.8,-74.4,1.2C-72.4,-5.5,-50.4,-10.9,-42.6,-24.7C-34.8,-38.4,-41.1,-60.3,-36.4,-69.2C-31.7,-78,-15.8,-73.7,-5.1,-64.8C5.6,-55.9,11.1,-42.4,20.4,-36.2Z"
                // d="M37.4,-66.9C48.6,-58.2,58.1,-48.6,65.7,-37.3C73.3,-26,78.9,-13,81,1.2C83.1,15.4,81.5,30.8,75.4,44.6C69.2,58.3,58.5,70.5,45.2,78C31.8,85.5,15.9,88.3,-0.3,88.8C-16.4,89.2,-32.8,87.3,-44,78.5C-55.2,69.8,-61.1,54.3,-68.5,40C-76,25.8,-84.8,12.9,-85,-0.1C-85.1,-13.1,-76.5,-26.1,-68.1,-38.8C-59.8,-51.4,-51.9,-63.7,-40.6,-72.4C-29.3,-81,-14.6,-86.1,-0.8,-84.7C13,-83.3,26.1,-75.5,37.4,-66.9Z"
                x="-2.17916%"
                y="35.4267%"
                width="140%"
                height="140%"
                fill="url(#Gradient2)"
                transform="rotate(255.072 50 50)"
            >
                <animate
                    attributeName="x"
                    // dur="23s"
                    dur={Math.round(duration * 0.3833) + 's'}
                    values="-25%;0%;-25%"
                    repeatCount="indefinite"
                ></animate>
                <animate
                    attributeName="y"
                    // dur="24s"
                    dur={Math.round(duration * 0.4) + 's'}
                    values="0%;50%;0%"
                    repeatCount="indefinite"
                ></animate>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    // from="360 50 50"
                    // to="0 50 50"
                    // dur="12s"
                    dur={Math.round(duration * 0.46) + 's'}
                    repeatCount="indefinite"
                ></animateTransform>
            </rect>
            <rect
                // d="M45.9,-79.3C59.4,-71.7,70.2,-59.2,76.8,-45.2C83.3,-31.2,85.8,-15.6,85.1,-0.4C84.5,14.9,80.9,29.7,73.4,42.2C65.9,54.6,54.5,64.6,41.6,70.8C28.7,76.9,14.4,79.2,-0.5,80.1C-15.4,80.9,-30.7,80.4,-43.4,74.1C-56,67.8,-65.9,55.8,-72.6,42.5C-79.3,29.2,-82.8,14.6,-81.4,0.8C-80.1,-13.1,-74,-26.1,-66,-37.1C-57.9,-48.1,-48,-57,-36.7,-65.9C-25.4,-74.7,-12.7,-83.4,1.8,-86.5C16.2,-89.5,32.4,-86.9,45.9,-79.3Z"
                x="9.00483%"
                y="14.5733%"
                width="100%"
                height="100%"
                fill="url(#Gradient3)"
                transform="rotate(139.903 50 50)"
            >
                <animate
                    attributeName="x"
                    // dur="25s"
                    dur={Math.round(duration * 0.4166) + 's'}
                    values="0%;25%;0%"
                    repeatCount="indefinite"
                ></animate>
                <animate
                    attributeName="y"
                    // dur="12s"
                    dur={Math.round(duration * 0.2) + 's'}
                    values="0%;25%;0%"
                    repeatCount="indefinite"
                ></animate>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 50 50"
                    to="0 50 50"
                    // dur="9s"
                    dur={Math.round(duration * 0.286) + 's'}
                    repeatCount="indefinite"
                ></animateTransform>
            </rect>
        </svg>
    );
}
