import {useEffect} from 'react'
import formatTitle from 'helpers/formatTitle'
import Greeting from './Greeting'

export default function Home(){
  useEffect(() => {
    document.title = formatTitle('home')
  });
  return(
    <>
    <Greeting/>
    
    </>
  )
}