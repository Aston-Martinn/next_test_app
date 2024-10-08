import styles from "./page.module.css";
import Navbar from '@/lib/components/NavBar';
import HomeSection from '@/lib/components/HomeSection';
import ImageSection from '@/lib/components/ImageSection';
import ContactUsSection from '@/lib/components/ContactUsSection';
import CardSection from '@/lib/components/CardSection';
import FooterSection from '@/lib/components/FooterSection';

export default function Home() {
  return (<>
    <Navbar></Navbar>
    <div className={styles.mainContainer}>
      <HomeSection></HomeSection>
      <ImageSection></ImageSection>
      <ContactUsSection></ContactUsSection>
      <CardSection></CardSection>
    </div>
    <FooterSection></FooterSection>
  </>

  );
}
