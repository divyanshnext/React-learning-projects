export default function ProfileImage(props) {
  return (
    <div className="profile-image-banner">
      <img
        src={props.image}
        alt="Profile"
        className="profile-image-banner-img"
      />
    </div>
  );
}
