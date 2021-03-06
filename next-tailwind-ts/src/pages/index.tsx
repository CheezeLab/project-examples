import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BreakpointColorTarget from '../components/responsive-design/media-responsive-button';
import BreakpointResponsiveCard from '../components/responsive-design/media-responsive-card';
import ResponsiveImage from '../components/responsive-design/media-responsive-image';
import DisabledButton from '../components/states/disables-button';
import FocusInput from '../components/states/focus-input';
import HoverButton from '../components/states/hover-button';
import CssNotification from '../components/utility-first/css-notification';
import TailwindCssNotification from '../components/utility-first/tailwind-css-notification';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CssNotification></CssNotification>
      <br />
      <TailwindCssNotification></TailwindCssNotification>
      <br />
      <ResponsiveImage></ResponsiveImage>
      <br />
      <BreakpointResponsiveCard></BreakpointResponsiveCard>
      <br />
      <BreakpointColorTarget></BreakpointColorTarget>
      <br />
      <HoverButton></HoverButton>
      <br />
      <FocusInput></FocusInput>
      <br />
      <DisabledButton></DisabledButton>
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button> */}
    </>
  );
};

export default Home;
