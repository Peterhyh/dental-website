import HomeBanner from '../components/home/HomeBanner';
import Header from '../components/Header';
import DoctorSection from '../components/home/DoctorSection';
import MissionSection from '../components/home/MissionSection';

const HomePage = () => {
    return (
        <>
            <Header />
            <HomeBanner />
            <DoctorSection />
            <MissionSection />
        </>
    )
};

export default HomePage;