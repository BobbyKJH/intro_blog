import { ListItem } from '@mui/material';
import styled from "styled-components"

export const ListItems = styled(ListItem)<{$bgc: boolean}>`
  background-color: ${props => props.$bgc ? "#ececec" : "#fff"};
`