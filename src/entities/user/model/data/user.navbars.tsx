import KeyIcon from '@mui/icons-material/Key';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import { UserFullNameCard } from '@/entities/user/ui/UserFullNameCard';

import { ElemWithTypography } from '@/shared/ui/elements';

import { Paths } from '@/shared/model/data';

export const nonAuthorizedUserPaths = {
  [Paths.LOGIN]: <ElemWithTypography Node={<KeyIcon fontSize="small" />}>Login</ElemWithTypography>,
  [Paths.REGISTRATION]: <ElemWithTypography Node={<HowToRegIcon fontSize="small" />}>Register</ElemWithTypography>
};

export const authorizedUserPaths = {
  [Paths.USER]: <UserFullNameCard />
};
