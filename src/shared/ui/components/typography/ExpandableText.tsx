import type { SxStylesMap } from '@/shared/model/types';

import { useMemo, useState } from 'react';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { Text } from '@/shared/ui/elements/typography/Text';
import { splitIntoTwoByWhitespaceIndex } from '@/shared/lib/utils';

const sxStyles: SxStylesMap = {
  text: {
    position: 'relative'
  },

  hiddenDescription: {
    opacity: 0,
    fontSize: '0 !important'
  },

  expandBtn: {
    position: 'absolute',
    bottom: 0,
    right: '50%',
    transform: 'translateY(100%)',
    borderTopRightRadius: '3px',
    borderTopLeftRadius: '3px',
    pt: 0.2,

    color: 'common.background',
    bgcolor: 'primary.main',

    '&:hover': {
      bgcolor: 'primary.dark'
    }
  }
} satisfies SxStylesMap;

interface ExpandableTextProps {
  maxLength?: number;
  description: string;
}

export function ExpandableText({ description, maxLength = 100 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [firstPart, secondPart] = useMemo(() => splitIntoTwoByWhitespaceIndex(description, maxLength), [description, maxLength]);

  const handleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <Text sx={sxStyles.text}>
      <Text component="span">
        {firstPart}
        {!isExpanded && '...'}
      </Text>
      <Text component="span" sx={[!isExpanded && sxStyles.hiddenDescription]}>
        {secondPart}
      </Text>

      {/* Position absolute */}
      <IconButton size="small" onClick={handleExpand} sx={sxStyles.expandBtn}>
        {isExpanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
      </IconButton>
    </Text>
  );
}
