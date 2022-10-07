import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from '../components/MainContainer'

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}
export default MyApp
