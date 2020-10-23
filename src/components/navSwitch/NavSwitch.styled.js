import styled from 'styled-components';

export const StyledNavSwitch = styled.div`
    .checkbox {
        opacity: 0;
        position: absolute;
    }

    .label {
        background-color: ${({ theme }) => theme.button};
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 50px;
        position: relative;
        padding: 5px;
        height: 26px;
        width: 50px;
    }

    .icon-moon {
        color: ${({ theme }) => theme.title};
    }

    .icon-sun {
        color: ${({ theme }) => theme.title};
    }

    .ball {
        background-color: ${({ theme }) => theme.secondaryBackground};
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        height: 22px;
        width: 22px;
        transition: transform 0.2s linear;
    }

    .checkbox:checked + .label .ball {
        transform: translateX(24px);
    }
`;