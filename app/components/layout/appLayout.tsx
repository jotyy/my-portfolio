import { Box } from '@chakra-ui/react';
import { Fragment } from 'react';
import Footer from './footer';
import TopNav from './topNav';

export interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <Fragment>
      <TopNav />
      <Box
        textAlign="center"
        fontSize="xl"
        w={[`90%`, `85%`, `80%`]}
        maxW={800}
        mx="auto"
      >
        <Box pt={`7rem`} pb={10}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Fragment>
  );
}

export default AppLayout;
