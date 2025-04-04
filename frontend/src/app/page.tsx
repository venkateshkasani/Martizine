import App from '../custom-components/App'
import TanstackProvider from '@/utils/TanstackProvider';

export default function Home () {
  return (
    <TanstackProvider>
      <App />
    </TanstackProvider>
  );
}