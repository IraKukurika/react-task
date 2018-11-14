import styled from 'styled-components';
import {Link} from "react-router-dom";

const LinkBack = styled(Link)`
  text-decoration: none;
  color: blue;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: blue;
  }
`;

export default LinkBack;

