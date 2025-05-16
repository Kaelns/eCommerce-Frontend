import KeyIcon from '@mui/icons-material/Key';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import { UserFullNameCard } from '@/entities/user/ui/UserFullNameCard';

import { NodeWithText } from '@/shared/ui/elements';

import { Paths } from '@/shared/model/data';

export const nonAuthorizedUserPaths = {
  [Paths.LOGIN]: <NodeWithText Node={<KeyIcon fontSize="small" />}>Login</NodeWithText>,
  [Paths.REGISTRATION]: <NodeWithText Node={<HowToRegIcon fontSize="small" />}>Register</NodeWithText>
};

export const authorizedUserPaths = {
  [Paths.USER]: <UserFullNameCard />
};
