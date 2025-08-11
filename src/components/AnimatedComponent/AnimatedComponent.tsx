import { useEffect, useRef, useState, type ReactNode } from "react";
import * as S from "./style"
import { keyframes } from "@emotion/react";

export interface AnimationComponentProps {
    children: ReactNode,
    moveDirection: "left" | "right"
}


const moveFromLeftToRight = keyframes`
0% {
    transform: translateX(-20vw);
  }
  100% {
    transform: translateX(0);
  }
    `

const moveFromRightToLeft = keyframes`
0% {
    transform: translateX(20vw);
  }
  100% {
    transform: translateX(0);
  }
    `

export const AnimatedComponent: React.FC<AnimationComponentProps> = ({ children, moveDirection }) => {

    const componentRef = useRef(null);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setStartAnimation(true);
                    observer.disconnect();
                }
            });
        });
        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <S.StyledAnimationComponent
            ref={componentRef}
            startAnimation={startAnimation}
            moveDirection={
                moveDirection === "right" ? moveFromLeftToRight : moveFromRightToLeft
            }
        >
            {children}
        </S.StyledAnimationComponent>
    )
}