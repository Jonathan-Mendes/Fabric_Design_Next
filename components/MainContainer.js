import Navbar from './SideBar'
// CSS
import Style from '../styles/MainContainer.module.css';

export default function MainContainer({ children }) {
  return (
    <>
      <Navbar />
      <main className={Style.container}>
        {children}
      </main>
    </>
  )
}