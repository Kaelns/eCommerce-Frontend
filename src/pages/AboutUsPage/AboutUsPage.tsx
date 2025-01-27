import { Box, List, Stack, Card, CardMedia, CardContent, Link, Typography, Paper } from '@mui/material';
import { TitleTypography } from '@/components/typography/TitleTypography';
import { BoldTypography } from '@/components/typography/BoldTypography';
import { ABOUT_US } from '@/pages/AboutUsPage/constants';
import type { SxStyles } from '@/shared/types/types';

const sxStyles: SxStyles = {
  pageContainer: {
    mt: -2,
    whiteSpace: 'pre-line'
  },
  imgWrapper: {
    p: 1
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 1
  },
  introductionWrapper: {
    p: 1
  }
};

export function AboutUsPage(): React.ReactNode {
  return (
    <Stack gap={1.5} sx={sxStyles.pageContainer}>
      <TitleTypography>About Us</TitleTypography>
      <Paper elevation={2} sx={sxStyles.introductionWrapper}>
        <Typography>{ABOUT_US.introduction}</Typography>
      </Paper>
      <List component={Stack} direction={{ zero: 'column', tablet: 'row' }} gap={2}>
        {ABOUT_US.members.map((member) => (
          <Card key={member.lastName} elevation={4}>
            <CardMedia sx={sxStyles.imgWrapper}>
              <Box component="img" src={member.photo} alt={member.lastName} sx={sxStyles.img} />
            </CardMedia>
            <CardContent>
              <TitleTypography variant="h6">{`${member.firstName} ${member.lastName}`}</TitleTypography>
              <BoldTypography> Github: </BoldTypography>
              <Link href={member.github} underline="hover">
                {member.github}
              </Link>
              <BoldTypography> Role: </BoldTypography>
              {member.roles}
              <BoldTypography> Significant contributions: </BoldTypography>
              {member.contributions}
              <BoldTypography> BIO: </BoldTypography>
              {member.bio}
            </CardContent>
          </Card>
        ))}
      </List>
    </Stack>
  );
}
