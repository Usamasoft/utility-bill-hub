import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import TableOfContents from '../../components/TableOfContents';
import FAQ from '../../components/FAQ';
import AdUnit from '../../components/AdUnit';
import SectionImage from '../../components/SectionImage';

export const metadata: Metadata = {
  title: 'SNGPL Bill Check Online 2024 — Complete Step-by-Step Guide',
  description: 'Check your SNGPL gas bill online using consumer number. Step-by-step desktop & mobile guide, bill components, common errors, FAQs. Updated 2024.',
  alternates: { canonical: 'https://utilitybillhub.pk/pakistan/sngpl-bill-check-online' },
};

const tocItems = [
  { id: 'what-is-sngpl', label: 'What is SNGPL?' },
  { id: 'consumer-number', label: 'Understanding Your Consumer Number' },
  { id: 'prerequisites', label: 'Prerequisites for Online Bill Checking' },
  { id: 'desktop-guide', label: 'Desktop Guide: Step by Step' },
  { id: 'mobile-guide', label: 'Mobile Browser Guide' },
  { id: 'sngpl-app', label: 'SNGPL Mobile App Method' },
  { id: 'bill-components', label: 'Understanding Bill Components' },
  { id: 'due-dates', label: 'Due Dates & Late Payment Fees' },
  { id: 'common-errors', label: 'Common Errors & Fixes' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Check SNGPL Gas Bill Online',
  description: 'Step-by-step guide to checking your SNGPL gas bill online using your consumer number.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Open the SNGPL Bill Checker', text: 'Open your browser and navigate to billchecker.sngpl.com.pk' },
    { '@type': 'HowToStep', position: 2, name: 'Locate the consumer number field', text: 'Find the consumer number input field on the homepage.' },
    { '@type': 'HowToStep', position: 3, name: 'Enter your consumer number', text: 'Type your 10-12 digit consumer number carefully without spaces.' },
    { '@type': 'HowToStep', position: 4, name: 'Complete CAPTCHA', text: 'If a CAPTCHA appears, solve it to proceed.' },
    { '@type': 'HowToStep', position: 5, name: 'Click Get Bill', text: 'Press the "Get Bill" or "Search" button to retrieve your bill.' },
    { '@type': 'HowToStep', position: 6, name: 'View bill details', text: 'Your bill amount, due date, and consumption details will appear.' },
    { '@type': 'HowToStep', position: 7, name: 'Download or save the bill', text: 'Click Download PDF to save a copy of your bill.' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://utilitybillhub.pk' },
    { '@type': 'ListItem', position: 2, name: 'Pakistan', item: 'https://utilitybillhub.pk/pakistan' },
    { '@type': 'ListItem', position: 3, name: 'SNGPL Bill Check Online' },
  ],
};

const faqItems = [
  { q: 'Can I check my SNGPL bill without a consumer number?', a: 'No, the consumer number is required to retrieve your bill from the SNGPL system. It is a unique identifier for your gas connection. You can find it on any previous bill, on your meter card, or by visiting your nearest SNGPL office with your CNIC.' },
  { q: 'How often is the SNGPL bill generated?', a: 'SNGPL generates bills on a monthly cycle. Your bill is typically generated once per month based on your meter reading date, which may differ from other consumers in the same area. The billing date is printed on your bill.' },
  { q: 'What is the SNGPL helpline number?', a: 'The official SNGPL helpline number is 1199 (toll-free within Pakistan). You can also reach them at 042-111-786-555 for Lahore and other regional offices. The helpline operates from 8am to 10pm daily.' },
  { q: 'Is it free to check my SNGPL bill online?', a: 'Yes, checking your SNGPL bill online via the official website (billchecker.sngpl.com.pk) is completely free of charge. There is no fee for viewing, downloading, or printing your bill from the official portal.' },
  { q: 'Can I check bills for multiple gas connections?', a: 'Yes, you can check bills for multiple connections by entering each consumer number separately. There is no login required — simply visit the checker, enter the consumer number, and view the respective bill. Repeat for each connection.' },
  { q: 'What if my bill amount appears incorrect?', a: 'If the bill amount seems wrong, first verify the meter readings shown on the bill match your physical meter. If there is a discrepancy, call the SNGPL helpline 1199 or visit your nearest SDO office with your meter reading proof (a photo of your meter).' },
  { q: 'How do I change my billing address with SNGPL?', a: 'To update your billing address, visit your nearest SNGPL Sub-Divisional Office (SDO) with original CNIC, a copy of the title document of new address, and your consumer number. You may also submit an application through the SNGPL official website under the consumer services section.' },
  { q: 'Can I view historical bills from previous months?', a: 'Yes, via the SNGPL Consumer Mobile App you can access billing history for up to 12 months. On the website (billchecker.sngpl.com.pk), only the current or most recent unpaid bill is typically shown. For older bills, the mobile app is the best option.' },
  { q: 'What happens if I do not pay my gas bill on time?', a: 'If you miss the due date, a late payment surcharge of 10% on the current bill amount plus Rs. 50 default surcharge is applied. After two consecutive months of non-payment, SNGPL may issue a disconnection notice. Reconnection after disconnection incurs additional fees.' },
  { q: 'How can I check my SNGPL bill via SMS?', a: 'You can send an SMS with your consumer number to the SNGPL SMS service number. The system replies with your current bill amount and due date as a text message. Standard SMS rates may apply. Check the SNGPL website for the current SMS shortcode as it may be updated.' },
  { q: 'Is the SNGPL website secure for bill checking?', a: 'Yes, the official SNGPL website uses HTTPS encryption. For bill checking, you do not need to enter any financial or sensitive personal information — only your consumer number — so security risk is minimal. Always ensure you are on the official domain (sngpl.com.pk).' },
  { q: 'What is the SNGPL Consumer Mobile App?', a: 'The SNGPL Consumer Mobile App is an official application available for Android (Google Play Store) and iOS (Apple App Store). It allows consumers to check bills, view 12 months of billing history, track payments, submit meter readings, and register complaints — all from a smartphone.' },
  { q: 'How can I get notified when my SNGPL bill is ready?', a: 'Register your mobile number with SNGPL to receive automatic SMS notifications when your monthly bill is generated. You can register your number by calling 1199, visiting an SDO office, or through the SNGPL consumer portal at selfservice.sngpl.com.pk.' },
  { q: 'What is the subsidy on gas bills for residential consumers?', a: 'The Government of Pakistan provides subsidized gas rates for domestic consumers using less than 100 HHM (hundred cubic meters) per month. This means low-consumption households pay at a lower slab rate. The subsidy amount is reflected as a deduction on the bill.' },
  { q: 'Can I check the bill for a commercial gas connection?', a: 'Yes, the online bill checker at billchecker.sngpl.com.pk works for all types of SNGPL connections including residential, commercial, and industrial. Simply enter the consumer number associated with the commercial connection to view the bill.' },
  { q: 'Which browser works best for checking SNGPL bills online?', a: 'Google Chrome is generally recommended for the best experience on the SNGPL bill checker website. Firefox and Microsoft Edge also work well. Avoid using very old browser versions. If you have issues, try clearing your browser cache or using incognito/private mode.' },
  { q: 'How do I download my SNGPL bill as a PDF?', a: 'After retrieving your bill on billchecker.sngpl.com.pk, look for the "Download PDF" or "Print Bill" button. Clicking it will open a PDF in a new tab. From there, use your browser or PDF viewer\'s download icon to save the file to your device. Ensure pop-ups are allowed in your browser.' },
  { q: 'What should I do if the SNGPL website is down?', a: 'If the SNGPL bill checker website is unavailable, try again after an hour as it may be temporary server maintenance. Alternatively, use the SNGPL Consumer Mobile App, send an SMS inquiry with your consumer number, or call the helpline 1199 to get your bill information verbally.' },
  { q: 'How do I register a complaint about a wrong bill?', a: 'To register a billing complaint, call SNGPL helpline 1199, visit your nearest SDO office in person, or submit an online complaint through the SNGPL consumer portal at selfservice.sngpl.com.pk. Provide your consumer number, the incorrect bill details, and your meter reading photo as evidence.' },
  { q: 'What are SNGPL office hours?', a: 'SNGPL offices are generally open Monday to Friday from 8:00 AM to 4:00 PM. Some offices may have extended hours or Saturday morning sessions. The helpline (1199) is available from 8:00 AM to 10:00 PM daily. Online services are available 24/7.' },
];

export default function SNGPLBillCheckPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BreadcrumbNav crumbs={[{ label: 'Pakistan', href: '/pakistan' }, { label: 'SNGPL Bill Check Online' }]} />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">🇵🇰 Pakistan Gas Bill Guide</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">SNGPL Bill Check Online 2024 — Complete Step-by-Step Guide</h1>
          <p className="text-xl text-gray-500 max-w-3xl">Learn exactly how to check your SNGPL gas bill online in minutes. Covers desktop, mobile browser, and app methods — plus bill components, due dates, and error troubleshooting.</p>
        </div>

        <div className="flex gap-8 items-start">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <TableOfContents items={tocItems} />

            {/* Section 1 */}
            <section id="what-is-sngpl" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4">What is SNGPL?</h2>
              <SectionImage src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80" alt="Gas pipeline infrastructure in Pakistan" caption="SNGPL operates an extensive gas distribution network across Punjab and KPK" priority />
              <p>Sui Northern Gas Pipelines Limited, universally known as SNGPL, is Pakistan&apos;s largest integrated gas company. Its full name &mdash; Sui Northern Gas Pipelines Limited &mdash; reflects both its origins in the Sui gas fields of Balochistan and its primary function of transmitting natural gas through an extensive pipeline network to consumers in northern Pakistan.</p>
              <p>SNGPL was established in 1963 and has since grown from a regional distribution company into a massive utility serving two entire provinces. The company was listed on the Pakistan Stock Exchange (PSX) as part of its privatization journey, though the Government of Pakistan retains a significant shareholding through various entities. Over the decades, SNGPL has invested heavily in pipeline infrastructure, meter replacement, and digital services.</p>
              <p>The company&apos;s service territory covers the entire province of Punjab and Khyber Pakhtunkhwa (KPK), making it the primary gas supplier for Pakistan&apos;s most populated regions. With over 10 million consumer connections, SNGPL&apos;s network stretches from major cities like Lahore, Faisalabad, Rawalpindi, and Peshawar to hundreds of smaller towns and rural communities.</p>
              <p>SNGPL serves four main categories of consumers. Residential consumers (domestic) make up the vast majority &mdash; these are households using gas for cooking, water heating, and space heating. Commercial consumers include restaurants, bakeries, laundries, and other businesses. Industrial consumers are large factories and manufacturing units with higher consumption requirements. Bulk consumers include power plants and fertilizer manufacturers who purchase gas in very large quantities at negotiated rates.</p>
              <p>In recent years, SNGPL has invested heavily in its digital transformation. The online bill checker, consumer mobile app, and self-service portal have dramatically reduced the need for consumers to visit offices for routine matters. Checking your bill online saves time, helps you track consumption trends, reduces the risk of late payments due to lost paper bills, and contributes to a paperless environment. The digital shift also enables real-time billing transparency &mdash; you can see exactly when your bill is generated and what charges compose it.</p>
            </section>

            <AdUnit slot="1234567890" className="my-8" />

            {/* Section 2 */}
            <section id="consumer-number" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Consumer Number</h2>
              <SectionImage src="https://images.unsplash.com/photo-1554224154-26032fced8bd?w=1200&auto=format&fit=crop&q=80" alt="SNGPL gas bill showing consumer number location" caption="Your consumer number is located in the top section of your SNGPL bill" />
              <p>Your SNGPL consumer number is a unique 10 to 12 digit identification code assigned to your gas connection. Think of it as the primary key that SNGPL&apos;s billing system uses to identify your account, retrieve your meter readings, and generate your monthly bill. Without this number, it is impossible to look up your bill through any digital channel.</p>
              <p>The consumer number is printed prominently on your paper bill — typically in the top-right area of the bill document. It may be labeled as &quot;Consumer Number,&quot; &quot;Consumer No,&quot; or &quot;A/C No&quot; depending on the bill format. If you have a meter card (issued when your connection was first established), the consumer number is also printed on that card. Your nearest SNGPL Sub-Divisional Office (SDO) can also provide your consumer number if you bring your original CNIC.</p>
              <p>The structure of the consumer number is not random. The first few digits typically represent a regional or distribution company code, indicating which SNGPL district or sub-division your connection belongs to. Middle digits may encode the distribution main or feeder line, while the final digits form your unique customer identifier within that segment. Understanding this structure is not necessary for bill checking, but it explains why no two consumer numbers are alike even if neighbors have seemingly similar numbers.</p>
              <p>It is important to distinguish between your consumer number and your meter number. The meter number is a serial number physically stamped or printed on the gas meter installed at your property. While SNGPL uses the meter number internally for technical purposes, the online bill checker requires your consumer number &mdash; not the meter number. Entering the meter number will result in a &quot;No Record Found&quot; error.</p>
              <p>If you have forgotten your consumer number and cannot find any old bills or your meter card, visit your nearest SNGPL office with your original CNIC. The staff can look up your consumer number using your identity card and the address of your connection. Alternatively, call the SNGPL helpline at 1199 &mdash; they can assist after verifying your identity. Keep a note of your consumer number in a safe, accessible place (such as your phone contacts or a photo of the bill) to avoid this situation in the future.</p>
            </section>

            {/* Section 3 */}
            <section id="prerequisites" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prerequisites for Online Bill Checking</h2>
              <p>Checking your SNGPL bill online is designed to be accessible to anyone with basic internet access. Before you start, make sure you have the following in place to ensure a smooth experience:</p>
              <ul>
                <li><strong>Internet connection:</strong> Any internet connection works &mdash; mobile data (3G, 4G, 5G), broadband, fiber, or Wi-Fi. A stable connection will make the process faster, but even a slower connection will load the bill checker within a minute.</li>
                <li><strong>Your 10-12 digit consumer number:</strong> This is the most critical requirement. Have it ready before you visit the website. You can find it on any previous SNGPL bill or your meter card.</li>
                <li><strong>Any internet-enabled device:</strong> The SNGPL bill checker works on smartphones, tablets, laptops, and desktop computers. There is no need for a high-end device — even older phones with modern browsers will work.</li>
                <li><strong>A supported web browser:</strong> Google Chrome is recommended for the best compatibility. Mozilla Firefox, Apple Safari, and Microsoft Edge all work well. Avoid using outdated Internet Explorer, which may not render the site correctly.</li>
                <li><strong>No registration or account needed:</strong> For basic bill checking, you do not need to create an SNGPL account or log in. Simply enter your consumer number and you can view the current bill instantly.</li>
                <li><strong>For SNGPL App users:</strong> If you prefer the mobile app, you will need Android 5.0 (Lollipop) or higher, or iOS 12 or higher. The app is free to download from Google Play Store and Apple App Store.</li>
              </ul>
              <div className="info-box">
                <strong>Tip:</strong> Before checking your bill online, ensure pop-up blockers are disabled or configured to allow pop-ups from sngpl.com.pk. Some features like PDF download open in a new tab and may be blocked by aggressive pop-up blockers.
              </div>
            </section>

            <AdUnit slot="1234567890" className="my-8" />

            {/* Section 4 */}
            <section id="desktop-guide" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Desktop Guide: Step by Step</h2>
              <SectionImage src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&auto=format&fit=crop&q=80" alt="Person checking SNGPL bill on laptop computer" caption="The SNGPL bill checker is optimized for desktop browsers" />
              <p>Checking your SNGPL bill on a desktop or laptop computer gives you the best experience — larger screen, easier navigation, and simple PDF downloading. Follow these seven steps carefully:</p>
              <ol>
                <li>
                  <strong>Step 1: Open your browser and navigate to billchecker.sngpl.com.pk</strong><br />
                  Launch Google Chrome, Firefox, or Edge. In the address bar at the top, type <code>billchecker.sngpl.com.pk</code> and press Enter. Wait for the page to fully load. You should see the SNGPL Bill Checker interface with the SNGPL logo and an input field. If the page does not load, check your internet connection or try again after a few minutes (the server may occasionally be under heavy load).
                </li>
                <li>
                  <strong>Step 2: Locate the consumer number input field</strong><br />
                  On the main page, there will be a clearly labeled text box asking for your &quot;Consumer Number&quot; or &quot;Account Number.&quot; This field is usually centered on the page and prominently displayed. Do not confuse it with any search bar in your browser.
                </li>
                <li>
                  <strong>Step 3: Enter your 10-12 digit consumer number carefully</strong><br />
                  Click inside the input field and type your complete consumer number. Double-check each digit as you type — a single wrong digit will return no results or the wrong bill. Do not add spaces, dashes, or any other characters. If your consumer number starts with zeros, include them (e.g., 0123456789).
                </li>
                <li>
                  <strong>Step 4: Complete the CAPTCHA if shown</strong><br />
                  Some visits to the bill checker may prompt a CAPTCHA (a security challenge to verify you are human). This is typically a simple image recognition task or a checkbox. Complete it accurately. If the CAPTCHA is unclear, look for a refresh icon to get a new one. If CAPTCHA keeps failing, try clearing your browser cache or switching to incognito mode.
                </li>
                <li>
                  <strong>Step 5: Click the &quot;Get Bill&quot; or &quot;Search&quot; button</strong><br />
                  After entering your consumer number and completing any CAPTCHA, click the button labeled &quot;Get Bill,&quot; &quot;Search,&quot; or &quot;Submit.&quot; The system will query the SNGPL database and retrieve your current bill information. This usually takes 2-5 seconds.
                </li>
                <li>
                  <strong>Step 6: View your bill details</strong><br />
                  Your bill information will appear on the page. This includes your name, consumer number, billing address, billing period, meter readings (previous and current), units consumed, current charges breakdown, any arrears, total amount due, and the due date. Review each section carefully.
                </li>
                <li>
                  <strong>Step 7: Download the PDF or take a screenshot</strong><br />
                  To save a copy of your bill, click the &quot;Download PDF&quot; or &quot;Print Bill&quot; button. A PDF version of your bill will open in a new tab. Click the download icon in your browser or PDF viewer to save it to your computer. Alternatively, press Ctrl+P (or Cmd+P on Mac) to print or save as PDF from the browser print dialog.
                </li>
              </ol>
              <div className="success-box">
                <strong>Success Tip:</strong> After downloading, save your bill PDF in a folder organized by month and year (e.g., &quot;Gas Bills/2024/November&quot;). This makes it easy to reference past bills when needed for banking, rental agreements, or dispute resolution.
              </div>
            </section>

            {/* Section 5 */}
            <section id="mobile-guide" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mobile Browser Guide</h2>
              <SectionImage src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&auto=format&fit=crop&q=80" alt="Person checking gas bill on smartphone mobile browser" caption="The SNGPL bill checker website is mobile-responsive and easy to use on any smartphone" />
              <p>Most people now prefer checking bills on their smartphones. The good news is that the SNGPL bill checker website is mobile-responsive, meaning it adapts to smaller screens and touch input. Here is how to do it in six easy steps:</p>
              <ol>
                <li>
                  <strong>Step 1: Open your mobile browser</strong><br />
                  On Android, open Google Chrome (pre-installed on most phones). On iPhone, you can use Safari (pre-installed) or Chrome. Both work equally well for the SNGPL bill checker. Avoid third-party browsers that may have compatibility issues.
                </li>
                <li>
                  <strong>Step 2: Navigate to billchecker.sngpl.com.pk</strong><br />
                  Tap the address bar at the top of your browser, type <code>billchecker.sngpl.com.pk</code>, and tap Go or the Enter key on your keyboard. The mobile-optimized version of the bill checker will load within a few seconds.
                </li>
                <li>
                  <strong>Step 3: Enter your consumer number</strong><br />
                  The site is mobile-responsive, so the input field will be large enough to tap easily. Tap on the consumer number field and your phone keyboard will appear. Type your complete 10-12 digit consumer number. Most phones will show a numeric keyboard for this field automatically.
                </li>
                <li>
                  <strong>Step 4: Tap Search / Get Bill</strong><br />
                  After entering your consumer number, tap the &quot;Get Bill&quot; or &quot;Search&quot; button. The button is typically below the input field. Wait 2-5 seconds for your bill details to load.
                </li>
                <li>
                  <strong>Step 5: View bill details on mobile screen</strong><br />
                  Scroll down to see all your bill details. On mobile, the information is stacked vertically for easy reading. Note down the total amount due and the due date. Zoom in if any text is too small to read.
                </li>
                <li>
                  <strong>Step 6: Screenshot or share the bill</strong><br />
                  To save the bill information, take a screenshot (press the Volume Down + Power button simultaneously on most Android phones; press the Side + Volume Up buttons on iPhone). To download the PDF on Android, tap the Download button and allow the download in Chrome. On iPhone/Safari, tap the Share icon and select &quot;Save to Files&quot; to store the PDF in iCloud or local storage.
                </li>
              </ol>
              <div className="warn-box">
                <strong>Mobile Tip:</strong> If the site is not loading correctly on mobile, try switching to Desktop Mode in your browser settings (tap the three-dot menu in Chrome and select &quot;Desktop Site&quot;). This forces the full desktop version to load on your phone.
              </div>
            </section>

            <AdUnit slot="1234567890" className="my-8" />

            {/* Section 6 */}
            <section id="sngpl-app" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SNGPL Mobile App Method</h2>
              <p>SNGPL offers an official consumer mobile application that provides more features than the website alone. The app is available for both Android and iOS devices and is completely free to download and use.</p>
              <p>To install the SNGPL Consumer App on Android, open Google Play Store and search for &quot;SNGPL Consumer App&quot;. Look for the official app published by SNGPL (Sui Northern Gas Pipelines Limited). Tap Install and wait for the download to complete. On iPhone or iPad, open the Apple App Store and search for the same name. Tap Get to download and install the app. Ensure you are downloading the official SNGPL app to avoid unofficial imitations.</p>
              <p>Once installed, open the app. You have two options: register with your consumer number and mobile number for full access, or use guest access to simply check your current bill without registration. Registration unlocks additional features including billing history for the past 12 months, consumption trend graphs, payment tracking, and complaint registration.</p>
              <p>The app&apos;s key features include: current bill view with full breakdown, monthly billing history, consumption trend graphs showing your gas usage over months, payment status tracking, meter reading submission (for smart meter users), complaint registration for billing or service issues, and locating the nearest SNGPL office or service center.</p>
              <p>To check your bill via the app: open the SNGPL Consumer App, tap on &quot;Bill Inquiry&quot; or &quot;Check Bill,&quot; enter your consumer number (or select from saved connections if you have registered), and your current bill details will appear within seconds. You can tap &quot;Download&quot; or &quot;Share&quot; to save or forward the bill via WhatsApp, email, or any messaging app.</p>
              <p>The main advantage of the app over the website is the persistent billing history. While the website typically shows only the current or most recent bill, the app maintains a 12-month history, allowing you to compare bills across seasons, track consumption changes after appliance upgrades, and identify any anomalous readings.</p>
            </section>

            {/* Section 7 */}
            <section id="bill-components" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Bill Components</h2>
              <SectionImage src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80" alt="SNGPL bill components and charges breakdown" caption="A typical SNGPL bill contains multiple charge components — understanding each helps verify accuracy" />
              <p>An SNGPL gas bill is not simply a single charge &mdash; it is composed of several distinct components, each regulated by OGRA (Oil and Gas Regulatory Authority) and the Government of Pakistan. Understanding each component helps you verify your bill is correct and anticipate how charges change with consumption.</p>
              <p><strong>Fixed Network/Infrastructure Charge:</strong> This is a fixed monthly charge applied to all consumers regardless of consumption. It covers SNGPL&apos;s costs of maintaining the gas pipeline infrastructure, meters, and distribution network that delivers gas to your property. Even if you use zero gas in a month, this charge will appear.</p>
              <p><strong>Variable Consumption Charge:</strong> This is the largest component of most bills. It is based on the number of HHM (Hundred Cubic Meters, also sometimes shown as MCF or units) you consumed during the billing period. SNGPL uses a slab-based tariff for domestic consumers, meaning the rate per unit increases as consumption increases:</p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr><th>Slab (HHM/month)</th><th>Rate (approx.)</th><th>Consumer Type</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>0 – 1 HHM</td><td>Subsidized (lowest rate)</td><td>Protected domestic</td></tr>
                    <tr><td>1 – 2 HHM</td><td>Low rate</td><td>Low-consumption domestic</td></tr>
                    <tr><td>2 – 3 HHM</td><td>Medium rate</td><td>Average domestic</td></tr>
                    <tr><td>3 – 5 HHM</td><td>Higher rate</td><td>High-consumption domestic</td></tr>
                    <tr><td>Above 5 HHM</td><td>Highest domestic rate</td><td>High-consumption domestic</td></tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Gas Infrastructure Development Cess (GIDC):</strong> This is a government levy collected through gas bills to fund new gas infrastructure development projects across Pakistan. The rate is fixed per unit consumed and is shown as a separate line item on your bill.</p>
              <p><strong>General Sales Tax (GST):</strong> GST at the applicable government rate is applied to gas charges. This is a standard tax collected on behalf of the Federal Board of Revenue (FBR).</p>
              <p><strong>Meter Rent:</strong> A small monthly charge for the use of the gas meter owned by SNGPL that is installed at your property. This is typically a nominal amount of a few rupees per month.</p>
              <p><strong>Arrears:</strong> Any unpaid amounts from previous billing periods appear as arrears. If you paid your previous bill in full and on time, this field should show zero. Always check that arrears on your bill match what you actually owe.</p>
              <p><strong>Meter Reading Section:</strong> The bill shows your previous meter reading (from last month), your current meter reading, and the difference (units consumed). Verify these by checking your physical meter if you suspect an error in the reading.</p>
            </section>

            <AdUnit slot="1234567890" className="my-8" />

            {/* Section 8 */}
            <section id="due-dates" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Due Dates &amp; Late Payment Fees</h2>
              <p>Understanding the SNGPL billing cycle and due date structure is essential to avoid late payment surcharges and the risk of disconnection. SNGPL generates bills on a monthly cycle, but the exact billing date varies by consumer and division. Your bill generation date is printed on the bill itself.</p>
              <p>Once your bill is generated, the due date is typically 15 to 20 days from the generation date. This gives consumers adequate time to check, collect funds, and pay through their preferred channel. Some consumers also have a grace period of 3 to 5 additional days after the printed due date during which payment is accepted without surcharge, though this is not guaranteed and should not be relied upon.</p>
              <p><strong>Late Payment Surcharge:</strong> If payment is not received by the due date, SNGPL applies a late payment surcharge. This is calculated as 10% of the current month&apos;s bill amount plus a flat Rs. 50 default surcharge. This amount is added to the next bill as arrears. For large bills, a 10% surcharge can be a significant additional cost.</p>
              <p><strong>Disconnection Timeline:</strong> SNGPL typically issues a disconnection notice after 2 consecutive months of non-payment. A disconnection notice gives the consumer a final opportunity to clear dues before the gas supply is physically disconnected. Reconnection after disconnection requires payment of all outstanding dues, surcharges, and an additional reconnection fee (typically Rs. 500 to Rs. 1,000 depending on connection type and region).</p>
              <p><strong>How to check if your bill is overdue:</strong> When you check your bill online, if the current date is past the due date printed on the bill and the bill still shows an outstanding balance, you are already in the late payment window. Pay immediately to minimize surcharge impact. The next month&apos;s bill will include the surcharge as arrears.</p>
              <div className="warn-box">
                <strong>Important:</strong> Set a recurring monthly reminder on your phone 5-7 days before your typical billing due date. This simple habit prevents the majority of late payment surcharges.
              </div>
            </section>

            {/* Section 9 */}
            <section id="common-errors" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Errors &amp; Fixes</h2>
              <p>When checking your SNGPL bill online, you may encounter various errors. Here are the 10 most common issues and exactly how to resolve them:</p>
              <ol>
                <li><strong>&quot;Invalid Consumer Number&quot; error:</strong> This means the number you entered is not in the correct format or does not exist. Double-check each digit against your physical bill. Ensure you have not accidentally omitted or added digits. The number should be 10-12 digits with no spaces or dashes.</li>
                <li><strong>&quot;No Record Found&quot; error:</strong> This usually means the consumer number is valid in format but not found in the database. Try entering it without leading zeros. If the issue persists, call 1199 to verify your consumer number &mdash; there may be a data entry discrepancy in SNGPL&apos;s records.</li>
                <li><strong>Website not loading at all:</strong> This could be a temporary server issue. The SNGPL bill checker experiences high traffic around bill generation periods. Try accessing the site during off-peak hours (early morning or late evening). Also check your own internet connection by visiting another website.</li>
                <li><strong>CAPTCHA not working or not loading:</strong> Clear your browser cache and cookies (press Ctrl+Shift+Delete in Chrome), then reload the page. Alternatively, open an incognito/private browser window and try again. Disabling VPN or proxy services can also help CAPTCHA systems work correctly.</li>
                <li><strong>PDF not downloading or not opening:</strong> Your browser&apos;s pop-up blocker may be preventing the PDF from opening in a new tab. In Chrome, click the pop-up blocked icon in the address bar and select &quot;Always allow pop-ups from this site.&quot; Then try downloading again.</li>
                <li><strong>Amount shown is zero or &quot;No bill generated&quot;:</strong> This is normal for newly connected consumers who have not yet completed their first billing cycle. It may also appear if you recently paid your bill and the system has not yet generated the new month&apos;s bill. Check back after your typical billing date.</li>
                <li><strong>Old bill showing instead of current bill:</strong> The site may be serving a cached version. Press Ctrl+F5 (or Cmd+Shift+R on Mac) to force a hard refresh. If using the SNGPL app, pull down on the screen to refresh the bill data.</li>
                <li><strong>Mobile site not loading properly:</strong> Switch to Desktop Mode in your mobile browser. In Chrome, tap the three-dot menu (⋮) and enable &quot;Desktop Site.&quot; In Safari, tap &quot;AA&quot; in the address bar and select &quot;Request Desktop Website.&quot;</li>
                <li><strong>Duplicate charges appearing on bill:</strong> If you see charges that appear to be duplicated or amounts you have already paid showing as unpaid, contact the SNGPL helpline 1199 immediately. Have your payment receipts ready as proof. This may require a formal billing complaint at your SDO office.</li>
                <li><strong>&quot;Login required&quot; error:</strong> Some parts of the SNGPL website require a registered account. However, the basic bill checker at billchecker.sngpl.com.pk should not require login. If you are redirected to a login page, ensure you are on the correct URL and not on the consumer portal (selfservice.sngpl.com.pk) which does require an account.</li>
              </ol>
            </section>

            <AdUnit slot="1234567890" className="my-8" />

            {/* Section 10 — FAQ */}
            <section id="faq" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <FAQ items={faqItems} pageUrl="https://utilitybillhub.pk/pakistan/sngpl-bill-check-online" />
            </section>

            {/* Internal Links */}
            <div className="section-divider" />
            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <Link href="/pakistan/how-to-pay-sngpl-bill" className="card hover:shadow-md transition-all no-underline group">
                <div className="text-2xl mb-2">💳</div>
                <div className="font-bold text-gray-900 group-hover:text-blue-700 mb-1">Learn how to pay your SNGPL bill online</div>
                <div className="text-sm text-gray-500">Easypaisa, JazzCash, online banking, ATM &amp; more →</div>
              </Link>
              <Link href="/pakistan/sngpl-duplicate-bill" className="card hover:shadow-md transition-all no-underline group">
                <div className="text-2xl mb-2">📄</div>
                <div className="font-bold text-gray-900 group-hover:text-blue-700 mb-1">Download your duplicate SNGPL bill</div>
                <div className="text-sm text-gray-500">Portal, app, WhatsApp &amp; SMS methods →</div>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden xl:block w-72 flex-shrink-0">
            <div className="sticky top-20 space-y-6">
              <AdUnit slot="1234567890" format="rectangle" />
              <div className="card">
                <h3 className="text-base font-bold text-gray-900 mb-3">Quick Links</h3>
                <ul className="space-y-2 list-none pl-0 mb-0">
                  <li><Link href="/pakistan/how-to-pay-sngpl-bill" className="text-sm text-blue-700 hover:text-blue-900 no-underline">💳 Pay SNGPL Bill</Link></li>
                  <li><Link href="/pakistan/sngpl-duplicate-bill" className="text-sm text-blue-700 hover:text-blue-900 no-underline">📄 Duplicate Bill Download</Link></li>
                  <li><Link href="/global/how-to-check-utility-bills" className="text-sm text-blue-700 hover:text-blue-900 no-underline">🌍 Global Bill Check Guide</Link></li>
                  <li><Link href="/global/how-to-pay-utility-bills" className="text-sm text-blue-700 hover:text-blue-900 no-underline">🌐 Global Payment Guide</Link></li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-base font-bold text-gray-900 mb-3">Official SNGPL Links</h3>
                <ul className="space-y-2 list-none pl-0 mb-0">
                  <li><a href="https://billchecker.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 hover:text-blue-900 no-underline">Bill Checker ↗</a></li>
                  <li><a href="https://www.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 hover:text-blue-900 no-underline">SNGPL Official ↗</a></li>
                  <li><a href="https://selfservice.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 hover:text-blue-900 no-underline">Consumer Portal ↗</a></li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500">SNGPL Helpline</div>
                  <div className="text-lg font-bold text-blue-800">1199</div>
                  <div className="text-xs text-gray-400">8:00 AM – 10:00 PM daily</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
