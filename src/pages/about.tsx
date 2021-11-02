import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo />
      <main>
        <section className='relative'>
          <Header />
          <div id='about' className='p-5 mx-auto'>
            <h1 className='mt-32 mb-0.5 text-xl leading-7'>ABOUT</h1>
            <p className='leading-6'>
              You Never Tagged Me™ sheds light upon an issue that is far too
              common within the artistic community. Credit is not given, where
              credit is due.
            </p>

            <p className='leading-6'>
              {' '}
              With our first NFT launch featuring the Balmain Army, we are
              addressing just that. Some of the celebrities featured in this
              photo posted on social media in 2016, generating millions of
              likes. While reaching such a grand audience due to the enticing
              elements of the creation, the actual creator Sébastien Micke, was
              never credited (#tagged) for his work on social media.
            </p>

            <p className='leading-6'>
              {' '}
              As we witness our world rapidly evolving into the era of digital
              art, it’s easier than ever to “tag”, or recognize the artist
              behind the said creation. By building a community where artists
              can now safely share their visions and voices, #YouNeverTaggedMe
              is a movement. A movement that ensures work no longer goes without
              recognition. Welcome to the movement You Never Tagged Me™. Where
              artists and creators will be delighted by a community… where
              respect, legitimacy &amp; credit is given.
            </p>

            <p className='leading-6'>
              {' '}
              Sébastien Micke, a professional photographer originally from the
              South of France, started a 22-year career at the prestigious
              French magazine Paris Match in 1999. Throughout this time, he
              became a visionary, photographing some of the most iconic faces in
              history for additional prestigious magazines such as Vogue, Vanity
              fair,Elle, GQ to name a few…
            </p>

            <p className='leading-6'>
              {' '}
              From Paris to New York to now currently based in Los Angeles. 2021
              approached and Sébastien made the decision to focus his creative
              mind on a new and exciting realm of digital art… Non-Fungible
              Tokens (NFTs). With the development of his first NFT project, You
              Never Tagged Me™, Sébastien’s new purpose revealed itself.
              Building a community for the next generation of various artists
              from different cultures and industries, where their visions and
              creations are appreciated by rightfully paying recognition where
              deserved. Sébastien Micke is at the forefront of revolutionizing
              and legitimizing the NFT industry that his passion fueled talent
              has landed him to date.
            </p>

            <p className='leading-6'>
              {' '}
              The Crypto Brokers™ is a dual-function company that features two
              sectors, cryptocurrency advisement and non-fungible token (NFT)
              creative development. Their NFT creative development sector
              enables current artists and new creators to develop and curate
              NFT’s with the option for compatible smart contracts.
            </p>

            <p className='leading-6'>
              Through powering the vision of Sébastien Micke, You Never Tagged
              Me™ the team at The Crypto Brokers™ are thrilled to be a part of
              this new community where every artist behind the screen, always
              receives the credit they deserve.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
