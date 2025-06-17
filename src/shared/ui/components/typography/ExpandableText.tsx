import type { SxStylesMap } from '@/shared/model/types';

import { useMemo, useState } from 'react';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { Text } from '@/shared/ui/elements/typography/Text';
import { sxMixins } from '@/shared/lib/mui';
import { splitIntoTwoByWhitespaceIndex } from '@/shared/lib/utils';

const sxStyles: SxStylesMap = {
  text: {
    position: 'relative',
    mb: 2
  },

  hiddenDescription: {
    opacity: 0,
    fontSize: '0 !important'
  },

  expandBtn: {
    display: 'inline-block',
    fontSize: 1,
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    ml: 1,
    paddingBlock: 0,

    color: 'common.background',
    bgcolor: 'primary.main',

    ...sxMixins.mediaHover({
      // paddingBlock: '2px',
      bgcolor: 'primary.dark'
    })
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
      <IconButton size="small" onClick={handleExpand} sx={[sxStyles.expandBtn, sxMixins.animation()]}>
        {isExpanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
      </IconButton>
    </Text>
  );
}
