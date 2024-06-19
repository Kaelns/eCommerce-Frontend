import React from 'react';

import { List, Card, CardContent, CardMedia, Link, Icon, Stack, Box } from '@mui/material';
import { TextBold } from '@/components/typography/TextBold/TextBold';
import { ABOUT_US } from '@/features/AboutUs/AboutUs.constant';
import { Title } from '@/components/typography/Title/Title';
import schoolLogo from '@/assets/rs_school.svg';

export default function AboutUs(): React.ReactNode {
  const listItems = ABOUT_US.members.map((member) => (
    <Card key={member.lastName}>
      <CardMedia>
        <img src={member.photo} alt={member.lastName} style={{ width: 200, height: 200 }} />
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
  ));
  return (
    <Box style={{ whiteSpace: 'pre-line' }}>
      <TextBold style={{ textAlign: 'center' }}>
        All roads lead to
        <Link href="https://rs.school/">
          <Icon style={{ height: 40, width: 100, marginLeft: 20 }}>
            <Box component="img" src={schoolLogo} alt="RS School logo" />
          </Icon>
        </Link>
      </TextBold>
      {ABOUT_US.introduction}
      <List component={Stack} direction={{ xs: 'column', md: 'row' }}>
        {listItems}
      </List>
    </Box>
  );
}
