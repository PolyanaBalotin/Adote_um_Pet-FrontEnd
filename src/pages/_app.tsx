import '../userInterface/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import theme from '../userInterface/themes/theme';
import Header from '../userInterface/components/Header/Header';
import AdminHeader from '../userInterface/components/AdminHeader/AdminHeader';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return(
    <ThemeProvider theme={ theme }>
      { router.pathname === '/' ? <Header /> : <AdminHeader /> }
      <Component { ...pageProps } />
    </ThemeProvider>
  )
}

export default MyApp
