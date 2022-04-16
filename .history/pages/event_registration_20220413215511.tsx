import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import RegistrationForm from '../components/event_registration/RegistrationForm'
import { none } from 'fp-ts/lib/Option'
import useSWR from 'swr'
import { EventData } from './api/get_event_data'

const EventRegistration: NextPage = () => {
  const { data, error } = useSWR('/api/get_event_data', (url) => fetch(url).then((res) => res.json()))
  const result: EventData | {error: string} = data
  const router = useRouter()
  const { code } = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>Register for %%Event%%</title>
        <meta name='description' content='event registration page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <RegistrationForm event_name={event_name} event_location={event_location} event_date={event_date} user_dashboard_link={none} />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = 
async (context) => {
  const { event_code } = context.query
  const registration_props: EventRegistrationProps =
    await fetch(`http://localhost:3000/api/get_event_data?event_code=${event_code}`)
      .then(res => res.json())
      .then(res => res as typeof res)

  return { props: { ... registration_props }}
}

export default EventRegistration;