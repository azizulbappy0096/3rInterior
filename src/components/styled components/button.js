import styled from "styled-components";


export const BannerButton = styled.button`
    color: white;
    font-weight: 600;
    padding: 8px 12px;
    background-color: rgba(0, 0,0, 0.5);
    border: none;
    border-radius: 4px;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: rgba(0, 0,0, 0.9);
    }
`; 