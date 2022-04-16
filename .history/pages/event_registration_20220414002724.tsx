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
  const router = useRouter()
  const { code } = router.query;
  const { data, error } = useSWR(`/api/get_event_data?event_code=${code}`, (url) => fetch(url).then((res) => res.json()))
  const result: EventData | {error: string} = data

  if (error) {
    return (<div></div>)
  }

  if (!data) {
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Register for %%Event%%</title>
        <meta name='description' content='event registration page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <RegistrationForm event_name={result.event_name} event_location={result.event_location} event_date={result.event_date} user_dashboard_link={none} />
      </main>
    </div>
  );
}

export default EventRegistration;