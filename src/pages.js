import { MainMenu } from './menu'
import '../stylesheets/pages.scss'

//Page template for non-home pages
const PageTemplate = ({children, banner, heading}) => 
    <React.Fragment>
        <header><MainMenu /></header>
        <main>
            <div className="page-banner">
                <img src={banner} />
                <h1>{heading}</h1>
            </div>
            <div className="main-container">
                {children}
            </div>
        </main>
        <footer><Copyright /></footer>
    </React.Fragment>


// Copyright
export const Copyright = () => 
    <div className="footer-container"><p>&copy; 2019, Chenxin Lin web works. All rights reserved.</p></div>

//Home page
export const Home = () =>
    <PageTemplate banner="../images/background/bg_home.jpg" heading="Best Hi-Fi Headphones">
        <section className="page-content">
            <p>Headphones are a superb way to boost your listening pleasure for comparatively little outlay. The very best headphones can revitalise the music you listen to, whether it's stored on your smartphone or played through your traditional hi-fi system.</p>
            <p>But there are many types: in-ears, on-ears, over-ears, Bluetooth, noise-cancelling. If you're wanting a pair for home use, to plug a pair into your hi-fi system or portable music player, you'll probably want a pair of over-ear headphones. You'll then have to choose whether you want open-backs (which leak sound) or the more typical closed-backs (which don't leak sound).</p>
            <p>Your next decision is between wired and wireless. Wireless is great for its cable-free convenience and exercise appeal but it's a technology which generally attracts higher price tags compared to wired counterparts of similar quality. And then there's noise-cancelling headphones which may well be high on your hit list too if you're looking for a pair to accompany you in the daily grind or silence the sound on aeroplanes. Available on wired and Bluetooth wireless headphones, this functionality helps isolate you from the outside world by blocking ambient sound.</p>
        </section>
    </PageTemplate>

// 404 not found page
export const Notfound404 = ({ location }) =>
    <React.Fragment>
        <header><MainMenu /></header>
        <main>
            <div className="main-container">
                <section className="page-content">
                    <h1>404 Not Found</h1>
                    <p>Resource not found at '{location.pathname}'.</p>
                </section>
            </div>
        </main>
        <footer><Copyright /></footer>
    </React.Fragment>

//Sony page
export const Sony = () => 
    <PageTemplate banner="../images/background/bg_sony.jpg" heading="Sony">
        <section className="page-content">
            <h2>Sony MDR-1A</h2>
            <p>Sony's been one of the main driving forces behind hi-res audio, so you won't be surprised to find the MDR-1As sporting the hi-res logo. They trump many rivals on paper by claiming to cover a wider frequency range (3Hz to 100kHz). But don't get bogged down by the numbers game - trust your ears.</p>
            <p>The MDR-1As are stylish and unassuming, similar in looks to their predecessors, the MDR-1Rs. This new version gets an extended frequency range, the hi-res logo, a new 40mm, aluminium-covered driver and redesigned earpads.</p>
            <p>Dynamically, the Sony MDR-1As really stand up to scrutiny. They sound exciting and engaging, more so than the likes of the Urbanite XLs. These headphones can shift from the speedy, attacking beat of Jessie J&#8217;s Bang Bang, to the slower, more measured and moody rhymes of The Weeknd&#8217;s Wicked Games without any hesitation. Add clarity and an uncluttered top end, and and it&#8217;s easy to get enthusiastic about their musical talents.</p>
            <p>That openness allows you to extract a lot of fine detail from the music, but it also draws your attention to a slight shortcoming with the midrange - vocals lack natural warmth and sound less substantial than when heard through the likes of the Philips M1MKIIs. Another little niggle is that the headphones sound fat in the bass. Play Lorde&#8217;s Royals and those booming bass notes need to sound tighter and better defined.</p>
        </section>
    </PageTemplate>
    
//Audio technica page
export const AudioTechnica = () => 
    <PageTemplate banner="../images/background/bg_audiotechnica.jpg" heading="Audio Technica">
        <section className="page-content">
            <h2>Audio-Technica ATH-MSR7</h2>
            <p>The Audio-Technica ATH-MSR7 are serious headphones designed primarily for portable use. While they&#8217;re positioned as being the perfect accompaniment for Hi-Res Audio files, we think they&#8217;re something even better. Audio-Technica has taken the audio brilliance of the ATH-M50X, improved it and made the design stylish enough to go head-to-head with pairs like the Beats Studio and Sony MDR-1A.</p>
            <p>Our headphones of 2014 were the Audio-Technica ATH-M50X. We loved them, and still do. However, they look and feel like what they are: a DJ/studio headphone modified for the consumer audience. The Audio-Technica ATH-MSR7 are much more clearly high street bound from the start. Their headband is narrower, the cups a little less vulgar, and the shape of them pretty similar to Sony&#8217;s top style headphones. Industrial design inflections have been replaced by ones a little more subtle. However, Audio-Technica hasn&#8217;t scaled all the way up to a Bowers &amp; Wilkins P7-grade construction. The Audio-Technica ATH-MSR7 are mostly-plastic, but the outermost parts of the cups are coated with aluminium to give them a higher-end feel.</p>
            <p>Large ear pads, good foam and mid-level headband firmness make the Audio-Technica ATH-MSR7 feel as though they&#8217;re hugging your head. It&#8217;s firm enough to run with, but not tight enough to cause any discomfort. Spot on. We did, however, notice a bit of creak to the plastics of the headband when walking about with the band at certain positions. For all Audio-Technica&#8217;s efforts, the construction isn&#8217;t quite as good as the similar Sony MDR-1A.</p>
            <p>Onto the stuff that really matters: the Audio-Technica ATH-MSR7 are among the best headphones in their class at this point for sound quality. By that we&#8217;re talking about portable, closed headphones with at least a hint of self-conscious style to their design. The Audio-Technica ATH-MSR7 offer accuracy with just enough bass emphasis to make them fun. Having such a measured approach to ear candy and accuracy is rare, especially in headphones you wouldn&#8217;t be embarrassed to wear out and about.</p>
        </section>
    </PageTemplate>

//Sennheiser page
export const Sennheiser = () => 
    <PageTemplate banner="../images/background/bg_sennheiser.jpg" heading="Sennheiser">
        <section className="page-content">
            <h2>Sennheiser Momentum 2.0</h2>
            <p>When Sennheiser first announced the (now triple-Award-winning) Momentum 2.0s (or M2s as they&#8217;re called in some quarters) in early 2015, we were intrigued by how they planned to tinker with what was already a winning formula. After all, the company really struck a chord with the original Momentum headphones. They brought a level of style, refinement and sound quality that was extremely tough to beat at the money.</p>
            <p>The only issues with the original Momentums were a slight lack of portability compared to some rivals and the fact they came with a bulky carry case. So guess what? Sennheiser has addressed this by simply adding a couple of hinges, making them foldable and easier to store. The knock-on effect is that they&#8217;ve been able to wave goodbye to the old chunky case too. But a new folding design is just the tip of the iceberg. The biggest changes are to the earpads and earcups, both noticeably larger on this model, the Sennheiser Momentum 2.0 over-ear headphones.</p>
            <p>As well as new earpieces, the headband for these Sennheiser headphones has also had a tweak. It still uses high-quality Alcantara, but the band itself now has a more rounded profile and sits closer to your head. There are a couple more subtle tweaks elsewhere too. The eagle-eyed amongst you will notice that the headphone cable now runs out of the right earcup instead of the left. Not that it makes a huge difference, but it&#8217;s something to bear in mind depending on which pocket you keep your phone in.</p>
            <p>According to Sennheiser, the drivers inside the earcups remain the same, but the earpad coupling allows for less bass leakage. Although the general character hasn&#8217;t drastically changed, a quick blast is enough to tell you that the quality level has gone up. They lavish you with greater detail and insight, sounding more confident and stopping and starting with greater precision. Play The Temper Trap&#8217;s Sweet Disposition and the rolling guitar plucks show clarity and nuance. Drum kicks and vocals have definition, as each element knits seamlessly together.</p>
        </section>
    </PageTemplate>

//AKG page
export const Akg = () => 
    <PageTemplate banner="../images/background/bg_akg.jpg" heading="AKG Acoustics">
        <section className="page-content">
            <h2>AKG K702</h2>
            <p>AKG manufacturers have carefully structured this model headset with features that exceed its purpose. Valuable and attractive features like a gold plated mini jack adapter, and EK300 cable adds to its appearance and functions.</p>
            <p>This AKG K702 has dimensions measuring 19 by 16 by 5 inches and it has a total weight of 1.5 pounds. It looks and is slightly bulky but its weight does not outweigh its performance. Many have observed that this headset has a strong resemblance to the K 701 consumer designed model. The only difference is that the 702 model offers features that suit broadcast engineers and recording studios more efficiently. Even though this model is slightly on the large size, it still has a very comfortable fit. It has a dark blue finish and it is more durable than the 701 model. These headphones are not designed for portability. They are over the ear and very large. The earcups are covered with ultra soft velour covered cushioning. Made from metal and real leather the headband adjusts evenly over your head. It is clearly marked for the right and left ears, so your comfort is almost guaranteed.</p>
            <p>In regards to sound the K 702 offers a very open sound. With voice coils made from flat wire, low distortion levels are maintained, even when listening to music at high volumes. The Patented Laminate Varimotion diaphragms give users an out of your head experience. Depending on the quality of the type of recording you are listening to the sound really appears to be coming from farther away than with most headsets. With the K702 model is it like having a speaker on your head. When you listen to music it feels as if it is coming from the outside of the headphones. Careful as it may fool you into thinking that there are other speakers on.</p>
            <p>Clarity is good, the music never becomes too aggressive or too thinned out. Sound Engineers feel this device offers the ideal balance between smoothness and resolution. Even with movies the sound is detailed, open and spacious. Movies are slightly more enhanced with this model than the music.</p>
        </section>
    </PageTemplate>