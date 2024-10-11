import { Box, List, Stack, Card, CardMedia, CardContent, Link, Typography, Paper } from '@mui/material';
import { Title } from '@/components/typography/Title';
import { TypographyBold } from '@/components/typography/TypographyBold';
import { ABOUT_US } from '@/pages/AboutUsPage/AboutUs.constant';
import type { SxStyles } from '@/shared/types';

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
      <Title>About Us</Title>
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
              <Title variant="h6">{`${member.firstName} ${member.lastName}`}</Title>
              <TypographyBold> Github: </TypographyBold>
              <Link href={member.github} underline="hover">
                {member.github}
              </Link>
              <TypographyBold> Role: </TypographyBold>
              {member.roles}
              <TypographyBold> Significant contributions: </TypographyBold>
              {member.contributions}
              <TypographyBold> BIO: </TypographyBold>
              {member.bio}
            </CardContent>
          </Card>
        ))}
      </List>
    </Stack>
  );
}
