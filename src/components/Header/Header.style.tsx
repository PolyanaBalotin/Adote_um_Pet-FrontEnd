import { styled } from '@mui/material';

export const HeaderContainer = styled('header')`
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(6) };
`;

export const Logo = styled('img')`
  width: 230px;
`;