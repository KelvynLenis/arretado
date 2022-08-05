import ChiefSection from '../components/ChiefSection'
import ContactSection from '../components/ContactSection'
import { recipes } from '../utils/recipes'
import Recipe from './Recipe'

export default function About() {
  return (
    <div>
      <ChiefSection />
      <ContactSection />
      {/* <Recipe recipe={recipes[0]} /> */}
    </div>
  )
}
