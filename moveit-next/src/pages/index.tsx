import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/CountDown'


import {ExperienceBar} from '../components/ExperienceBar'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar/>

      <section>
        <div className={styles.container}>
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
        </div>

        <div>
        
        </div>
      </section>
    </div>
  )
}
