import { Poppins } from '@next/font/google';
import { type AppType } from 'next/app';

import '../styles/globals.css';
import { api } from '../utils/api';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
});

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <main className={poppins.className}>
            <Component {...pageProps} />
        </main>
    );
};

export default api.withTRPC(MyApp);
