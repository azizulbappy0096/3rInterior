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

export const CategoryButton = styled.a`
    display: flex;
    align-items: center;
    color: grey;
    font-weight: 600;
    padding: 8px 12px;
    background-color: #d1d2d18c;
    border: 1px solid grey;
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

export const AddMore = styled.button`
    display: flex;
    align-items: center;
    color: grey;
    font-weight: 600;
    padding: 8px 12px;
    background-color: #d1d2d18c;
    border: 1px solid grey;
    border-radius: 4px;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: rgba(0, 0,0, 0.9);
        color: white;
    }
`;

export const Submit = styled.button`
    display: flex;
    align-items: center;
    color: rgb(0, 0, 0, 0.6);
    font-weight: 500;
    padding: 4px 8px;
    background-color: #34ff1b69;
    border: 1px solid grey;
    border-radius: 4px;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: red;
        color: white;
    }
`;