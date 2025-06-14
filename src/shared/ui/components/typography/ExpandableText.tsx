import type { SxStylesMap } from '@/shared/model/types';

import { useMemo, useState } from 'react';
import { IconButton } from '@mui/material';

import { Text } from '@/shared/ui/elements/typography/Text';
import { sxMixins } from '@/shared/lib/mui';
import { splitIntoTwoByWhitespaceIndex } from '@/shared/lib/utils';

const sxStyles: SxStylesMap = {
  hiddenDescription: {
    height: 0,
    opacity: 0,
    fontSize: 0
  },
  expandBtn: {
    display: 'inline'
  }
};

interface ExpandableTextProps {
  maxLength?: number;
  description: string;
}

export function ExpandableText({ description, maxLength = 100 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [firstPart, secondPart] = useMemo(() => splitIntoTwoByWhitespaceIndex(description, maxLength), [description, maxLength]);

  const handleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <Text>
      <Text component="span">{firstPart}</Text>
      <Text component="span" sx={[sxMixins.animation(), !isExpanded && sxStyles.hiddenDescription]}>
        {secondPart}
      </Text>
      <IconButton size="small" onClick={handleExpand} sx={sxStyles.expandBtn}>
        {isExpanded ? 'Hide' : 'Read More'}
      </IconButton>
    </Text>
  );
}
