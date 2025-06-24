import './App.css'
import ProfileImage from './components/ProfileImage'
import ProfileName from './components/ProfileName'
import ProfileDesc from './components/ProfileDesc'
import myImage from './assets/divyansh.jpg'
import ProfileSkills from './components/ProfileSkills'

function App() {
  const skills = ["C++", "Java", "TypeScript", "Python", "React", "Express"];

  return (
    <div className="profile-card">
      <ProfileImage image={myImage}/>
      <ProfileName name="Divyansh"/>
      <ProfileDesc desc="I am a full stack developer who loves to write React and Express code."/>
      <ProfileSkills skill={skills}/>
    </div>
  )
}

export default App
