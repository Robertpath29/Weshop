import Slider from "rc-slider";
import styled from "styled-components";
import { theme } from "../../../style/theme.style";

export const SliderRangeStyle = styled(Slider)`
    max-width: 100%;

    .rc-slider-rail {
        height: 5px;
        background-color: lightgray;
    }

    .rc-slider-track {
        height: 5px;
        background-color: ${() => theme.color.main};
    }

    .rc-slider-handle {
        width: 5px;
        height: 20px;
        margin-top: -7px;
        background-color: ${() => theme.color.main};
        opacity: 1;
        border-radius: 0;
        border: none;
    }
    .rc-slider-handle-dragging {
        border-color: none !important;
        box-shadow: none !important;
    }
`;
