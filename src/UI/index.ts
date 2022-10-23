import styled from "styled-components";

const Icon = styled.i`
    font-size: 20px;
    color: ${(props) => props.color};
`;

const ToolbarIcon = styled(Icon)`
    cursor: pointer;
`;

export { Icon, ToolbarIcon};