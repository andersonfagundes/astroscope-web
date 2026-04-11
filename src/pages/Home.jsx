import Apod from '../components/apod/Apod';
import Globe from '../components/globe/Globe';
import Navbar from '../components/navbar/Navbar';

export default function Home() {
  return (
    <div class="min-h-screen bg-white text-slate-900 antialiased transition-colors duration-300 dark:bg-black dark:text-slate-100">
      <Navbar />
      <Globe />
      <Apod />
    </div>
  );
}
