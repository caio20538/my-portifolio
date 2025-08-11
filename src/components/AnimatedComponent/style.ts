import styled from "@emotion/styled"


export const StyledAnimationComponent = styled("div")<{ startAnimation: boolean, moveDirection: string }>(({ startAnimation, moveDirection }) => ({
        animation: startAnimation ? `${moveDirection} 1s linear` : "none"
    }));