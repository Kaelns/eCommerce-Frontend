import { createContext, useMemo } from 'react';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { useAlertText } from '@/components/AlertText/useAlertText';
import { IUseAlertTextReturn } from '@/components/AlertText/AlertText.interface';
import { INITIAL_USE_ALERT_TEXT } from '@/context/AlertTextContext/AlertTextContext.constants';

export const AlertTextContext = createContext<IUseAlertTextReturn>(INITIAL_USE_ALERT_TEXT);

export function AlertTextContextProvider({ children }: PropsWithChildren): React.ReactNode {
  const alertTextData = useAlertText();
  const value = useMemo(() => alertTextData, [alertTextData]);
  return <AlertTextContext.Provider value={value}>{children}</AlertTextContext.Provider>;
}
