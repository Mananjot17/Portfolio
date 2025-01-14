import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';

const Profile = () => (
  <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-8">
        <ProfileImage />
        <ProfileInfo />
      </div>
    </div>
  </section>
);

export default Profile;