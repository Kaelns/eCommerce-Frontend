import { Box, Icon, List, Stack, Card, CardMedia, CardContent, Link } from '@mui/material';
import { Title } from '@/components/typography/Title/Title';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { ABOUT_US } from '@/pages/AboutUsPage/AboutUs.constant';
import schoolLogo from '@/assets/rs_school.svg';

export function AboutUsPage(): React.ReactNode {
  return (
    <>
      <Title>About Us Page</Title>
      <Box sx={{ whiteSpace: 'pre-line' }}>
        <TextBold sx={{ textAlign: 'center' }}>
          All roads lead to
          <Link href="https://rs.school/">
            <Icon sx={{ height: 40, width: 100, ml: 20 }}>
              <Box component="img" src={schoolLogo} alt="RS School logo" />
            </Icon>
          </Link>
        </TextBold>
        {ABOUT_US.introduction}
        <List component={Stack} direction={{ xs: 'column', md: 'row' }}>
          {ABOUT_US.members.map((member) => (
            <Card key={member.lastName}>
              <CardMedia>
                <Box component="img" src={member.photo} alt={member.lastName} style={{ width: 200, height: 200 }} />
              </CardMedia>
              <CardContent>
                <Title variant="h6">{`${member.firstName} ${member.lastName}`}</Title>
                <TextBold> Github: </TextBold>
                <Link href={member.github} underline="hover">
                  {member.github}
                </Link>
                <TextBold> Role: </TextBold>
                {member.roles}
                <TextBold> Significant contributions: </TextBold>
                {member.contributions}
                <TextBold> BIO: </TextBold>
                {member.bio}
              </CardContent>
            </Card>
          ))}
        </List>
      </Box>
    </>
  );
}
