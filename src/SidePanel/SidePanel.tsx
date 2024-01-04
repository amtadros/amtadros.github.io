import profilePic from '../assets/profile-pic.jpeg'
import './SidePanel.css'

export default function SidePanel() {
  return (
    <>
      <div className='sidebar'>
        <h1>Mandy Tadros</h1>
        <img src={profilePic} className="logo" alt="Mandy Tadros" />
      </div>
    </>
  )
}