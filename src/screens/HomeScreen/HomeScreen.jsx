import Hero from '../../components/Hero/Hero';
import NewListings from '../../components/NewListings/NewListings';
import './homescreen.scss';

export default function HomeScreen() {
  return (
    <div className="home-screen">
        <Hero/>
        <NewListings/>
    </div>
  )
}
