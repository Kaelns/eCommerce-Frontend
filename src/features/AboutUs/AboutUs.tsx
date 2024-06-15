import { List, Card, CardContent, CardMedia } from '@mui/material';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { ABOUT_US } from '@/features/AboutUs/aboutUs.constants';
import { Title } from '@/components/typography/Title/Title';

export default function AboutUs(): React.ReactNode {
  const listItems = ABOUT_US.members.map((member) => (
    <Card key={member.lastName}>
      <CardMedia>
        <img src={member.photo} alt={member.lastName} style={{ width: 200, height: 200 }} />
      </CardMedia>
      <CardContent>
        <Title variant="h6">{`${member.firstName} ${member.lastName}`}</Title>
        <TextBold> Roles: </TextBold>
        {member.roles}
        <TextBold> BIO: </TextBold>
        {member.bio}
      </CardContent>
    </Card>
  ));
  return (
    <>
      Here can be the description
      <List sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', mx: 'auto' }}>{listItems}</List>
    </>
  );
}
