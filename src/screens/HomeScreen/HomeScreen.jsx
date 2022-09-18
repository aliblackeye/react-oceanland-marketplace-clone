import Hero from '../../components/Hero/Hero';
import NewListings from '../../components/NewListings/NewListings';
import RecentlySold from '../../components/RecentlySold/RecentlySold';

export default function HomeScreen() {
  return (
    <div className="home-screen">
        <Hero/>
        <NewListings/>
        <RecentlySold/>
    </div>
  )
}
