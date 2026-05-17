import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import TableOfContents from '../../components/TableOfContents';
import FAQ from '../../components/FAQ';
import AdUnit from '../../components/AdUnit';
import SectionImage from '../../components/SectionImage';

export const metadata: Metadata = {
  title: 'Download SNGPL Duplicate Gas Bill — 6 Easy Methods (2024)',
  description: 'Lost your SNGPL gas bill? Download a duplicate copy instantly via official portal, mobile app, WhatsApp, or SMS. Step-by-step guide with screenshots.',
  alternates: { canonical: 'https://utilitybillhub.pk/pakistan/sngpl-duplicate-bill' },
};

const tocItems = [
  { id: 'what-is-duplicate', label: 'What is a Duplicate Bill?' },
  { id: 'method-portal', label: 'Method 1: SNGPL Official Portal' },
  { id: 'method-mobile', label: 'Method 2: Mobile Browser' },
  { id: 'method-app', label: 'Method 3: SNGPL Mobile App' },
  { id: 'method-whatsapp', label: 'Method 4: WhatsApp Service' },
  { id: 'method-sms', label: 'Method 5: SMS Inquiry' },
  { id: 'method-office', label: 'Method 6: Visit SNGPL Office' },
  { id: 'print-guide', label: 'How to Print Your Bill' },
  { id: 'pdf-guide', label: 'Converting & Saving as PDF' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Download SNGPL Duplicate Gas Bill',
  description: 'Step-by-step guide to downloading your SNGPL gas bill using 6 different methods.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Go to SNGPL Bill Checker', text: 'Open billchecker.sngpl.com.pk in your browser.' },
    { '@type': 'HowToStep', position: 2, name: 'Enter consumer number', text: 'Type your 10-12 digit consumer number in the field provided.' },
    { '@type': 'HowToStep', position: 3, name: 'Click Get Bill', text: 'Press Get Bill or Search to retrieve your bill details.' },
    { '@type': 'HowToStep', position: 4, name: 'Click Download PDF', text: 'Find the Download PDF or Print Bill button on the results page.' },
    { '@type': 'HowToStep', position: 5, name: 'Save to device', text: 'In the PDF viewer, click Download to save the bill PDF to your device.' },
  ],
};

const faqItems = [
  { q: 'Is a duplicate SNGPL bill valid for bank payment?', a: 'Yes, a duplicate SNGPL bill downloaded from the official portal or app is fully valid for payment purposes at any bank, Easypaisa agent, or other payment channel. Banks and payment agents only need your consumer number and bill amount, which are present on the duplicate bill.' },
  { q: 'How many months of billing history can I download?', a: 'Through the SNGPL Consumer Mobile App, you can access and download up to 12 months of billing history. The web portal (billchecker.sngpl.com.pk) typically shows only the current or most recent bill. For older bills beyond 12 months, you would need to contact SNGPL\'s SDO office directly.' },
  { q: 'Do I need to pay to get a duplicate SNGPL bill?', a: 'No, downloading a duplicate SNGPL bill is completely free via all digital channels (website, mobile app, WhatsApp service). Even at SNGPL offices, there is no charge for printing a duplicate bill for the consumer. It is a free consumer service provided by SNGPL.' },
  { q: 'What if my name or address on the bill is incorrect?', a: 'If you notice an error in your name or address on the bill, visit your nearest SNGPL Sub-Divisional Office (SDO) with your original CNIC and proof of correct address. Fill out a correction form. The change typically takes 1-2 billing cycles to reflect on your bill.' },
  { q: 'Can I get a duplicate bill for previous months?', a: 'Yes, through the SNGPL Consumer App you can view and download bills from the past 12 months. Select the specific month from the billing history section in the app and download the PDF for that particular month.' },
  { q: 'What format is the duplicate bill in?', a: 'The duplicate SNGPL bill is provided in PDF format. This is a standard, universally accessible format that can be opened on any smartphone, tablet, computer, or sent by email or WhatsApp. The PDF is an exact digital replica of the original paper bill.' },
  { q: 'Can I request a duplicate bill by phone call?', a: 'By calling the SNGPL helpline at 1199, an agent can verbally confirm your bill amount and due date, but they cannot send you a PDF bill over the phone. For a PDF copy, use the website, app, WhatsApp service, or visit an SNGPL office.' },
  { q: 'How to get a duplicate bill if my consumer number is unknown?', a: 'If you do not know your consumer number, visit your nearest SNGPL Sub-Divisional Office with your original CNIC and proof of the gas connection address. The staff can look up your consumer number and provide a printed duplicate bill on the spot.' },
  { q: 'Is a duplicate bill accepted at all banks for payment?', a: 'Yes, all banks that accept SNGPL bill payments (which includes virtually all major commercial banks in Pakistan) will accept a duplicate bill. In practice, most bank cashiers only need your consumer number, not the physical bill. The duplicate is more useful for your own records and loan/verification purposes.' },
  { q: 'Can my landlord obtain my duplicate SNGPL bill?', a: 'Generally, SNGPL bill information is tied to the consumer number, which any person with that number can access online. If your landlord has your consumer number, they can view the current bill online. For certified or formal copies, only the registered consumer (or their legal representative) can obtain these from SNGPL offices.' },
  { q: 'What if the duplicate bill shows a different amount than expected?', a: 'The duplicate bill reflects the most current data in SNGPL\'s system. If amounts differ from what you expected, it may be due to recently added arrears, adjustments, or a new billing cycle having been generated. Check the billing period dates on the bill to ensure you are looking at the correct month.' },
  { q: 'Can I use email to request a duplicate bill from SNGPL?', a: 'SNGPL\'s primary contact channels are the helpline (1199), office visits, and the online self-service portal. While SNGPL has an official email for complaints, routine duplicate bill requests are best handled through the digital self-service channels (website, app, WhatsApp) for fastest response.' },
  { q: 'What is the difference between a duplicate and original SNGPL bill?', a: 'The original bill is the paper copy delivered to your address by post. A duplicate bill is a reprint of the same data from SNGPL\'s system. The data content is identical — same consumer details, same amounts, same period. For all practical purposes (payment, verification, documentation), they are equivalent.' },
  { q: 'How can I get a bill for a disconnected connection?', a: 'Even for disconnected gas connections, SNGPL maintains billing records. You can check the bill for a disconnected connection using the same consumer number on the online portal. For very old disconnected connections, some records may only be available at the SDO office in person.' },
  { q: 'Can I view unpaid bills from last year?', a: 'Yes, if bills from last year are still outstanding (unpaid), they will appear as arrears on your current bill. The SNGPL app\'s billing history section also allows you to view past months\' bills. Unpaid old bills accumulate as arrears with surcharges in your account.' },
  { q: 'What if the PDF does not open on my phone?', a: 'If a downloaded PDF does not open, you may need a PDF reader app. On Android, install Adobe Acrobat Reader or Foxit PDF Reader from the Play Store. On iPhone, PDFs typically open natively in Safari or Files. Alternatively, open the PDF using Google Drive by tapping "Open with" and selecting Google Drive.' },
  { q: 'How do I verify the authenticity of a duplicate bill?', a: 'An authentic SNGPL duplicate bill downloaded from the official website (billchecker.sngpl.com.pk) or the official app will show the SNGPL logo, your correct consumer details, official SNGPL formatting, and a QR code (on newer bill formats) that links to the official SNGPL verification system.' },
  { q: 'Is the SNGPL WhatsApp bill service available 24/7?', a: 'The SNGPL WhatsApp service is largely automated and can receive messages at any time. However, response times may vary. The system is generally available during business hours (8am-10pm) but automated responses for standard consumer number lookups are typically available around the clock.' },
  { q: 'What if the SNGPL app shows no bill for the current month?', a: 'If no bill appears for the current month in the SNGPL app, it likely means your billing cycle has not reached the bill generation date yet. Wait a day or two if you know your approximate billing date. If the expected date has passed by more than a week, call 1199 to inquire if there is an issue with your connection\'s billing.' },
  { q: 'How can I get a certified copy of my SNGPL bill?', a: 'A certified copy (with official stamp and signature) can only be obtained from an SNGPL office in person. Visit your nearest Sub-Divisional Office or Divisional Office, present your CNIC and consumer number, and request a certified duplicate. This is typically required for legal purposes, property transactions, or court submissions.' },
];

export default function SNGPLDuplicateBillPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <BreadcrumbNav crumbs={[{ label: 'Pakistan', href: '/pakistan' }, { label: 'SNGPL Duplicate Bill' }]} />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">📄 Duplicate Bill Guide</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Download SNGPL Duplicate Gas Bill — 6 Easy Methods (2024)</h1>
          <p className="text-xl text-gray-500 max-w-3xl">Lost or misplaced your SNGPL gas bill? No problem. Get a duplicate copy instantly through the official portal, mobile app, WhatsApp, SMS, or by visiting an SNGPL office.</p>
        </div>

        <div className="flex gap-8 items-start">
          <div className="flex-1 min-w-0">
            <TableOfContents items={tocItems} />

            {/* Section 1 */}
            <section id="what-is-duplicate" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4">What is a Duplicate SNGPL Bill?</h2>
              <SectionImage src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80" alt="SNGPL duplicate bill documents and paperwork" caption="A duplicate SNGPL bill is an exact digital or paper reprint of your original bill" priority />
              <p>A duplicate SNGPL bill is a reprint or digital copy of your original monthly gas bill, generated from SNGPL&apos;s billing system with the same data as the original. It contains your consumer number, name, billing address, meter readings, consumption details, all charge components, total amount due, and due date &mdash; everything you need to verify, pay, or document your gas bill.</p>
              <p>There are many situations where you might need a duplicate bill. The most common reason is that the original paper bill was not received (postal delivery issues are common in Pakistan), was lost or damaged, or was accidentally discarded. Duplicate bills are also needed for bank payment where the cashier wants to see the bill, for rental agreements where landlords need to verify utility connections, for loan applications where banks request utility bills as address proof, and for property documentation and transfer processes.</p>
              <p>Under SNGPL&apos;s consumer service policy, duplicate bills are freely available to all consumers through digital channels at no cost. There is no charge, no registration requirement for basic bill access, and no limit on how many times you can download your current bill. This reflects SNGPL&apos;s commitment to digital transparency and consumer empowerment.</p>
              <p>A duplicate bill downloaded from the official SNGPL website or app is legally and practically equivalent to the original paper bill for all payment and verification purposes. Banks, payment agents, and government offices accept digitally obtained SNGPL bills without question, provided the data matches SNGPL&apos;s records.</p>
              <p>The information shown on a duplicate bill includes: consumer number, consumer name, billing address, connection type, meter number, previous meter reading, current meter reading, units consumed (HHM), current charges broken down by component, any arrears, GST and other taxes, total amount payable, due date, and the billing period (from date and to date). Having all this information at hand makes bill verification and payment straightforward.</p>
            </section>

            <AdUnit slot="1234567890" className="my-8" />

            {/* Section 2 */}
            <section id="method-portal" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Method 1: SNGPL Official Portal</h2>
              <p>The fastest and most reliable way to get your duplicate SNGPL bill is through the official SNGPL Bill Checker website. This method works 24/7 and requires only a browser and your consumer number.</p>
              <ol>
                <li><strong>Open billchecker.sngpl.com.pk</strong> in any web browser (Chrome recommended). The page loads quickly on both fast and slow connections.</li>
                <li><strong>Locate the consumer number input field.</strong> It is displayed prominently in the center of the page. There may be a label reading &quot;Consumer Number,&quot; &quot;Consumer No,&quot; or &quot;Account No.&quot;</li>
                <li><strong>Enter your 10-12 digit consumer number.</strong> Type carefully, digit by digit. Do not include spaces or dashes. If you are unsure of any digit, verify from your old bill or meter card before proceeding.</li>
                <li><strong>Click &quot;Get Bill&quot; or &quot;Search.&quot;</strong> The system queries the SNGPL database and returns your bill data within 2-5 seconds.</li>
                <li><strong>Your bill details appear on screen.</strong> Verify the consumer name and address to confirm you are viewing the correct account.</li>
                <li><strong>Find the &quot;Download PDF&quot; or &quot;Print Bill&quot; button.</strong> This is typically displayed near the top or bottom of the bill results. Some versions of the site use a printer icon.</li>
                <li><strong>Click Download PDF.</strong> The bill opens as a PDF in a new browser tab. Your browser&apos;s pop-up blocker must allow pop-ups from sngpl.com.pk for this to work (see troubleshooting below).</li>
                <li><strong>Save the PDF to your device.</strong> In the PDF viewer tab, click the download icon (typically shown as an arrow pointing down) to save the file. Choose a meaningful filename like &quot;SNGPL_Bill_Nov2024.pdf&quot; for easy retrieval later.</li>
              </ol>
              <div className="info-box">
                <strong>Pop-up Tip:</strong> If the PDF does not open in a new tab, your browser is likely blocking pop-ups. In Chrome, look for a small pop-up blocked icon in the address bar and click it to allow pop-ups from sngpl.com.pk. In Firefox, check the notification bar at the top of the page for the pop-up blocked message.
              </div>
            </section>

            {/* Section 3 */}
            <section id="method-mobile" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Method 2: Mobile Browser</h2>
              <SectionImage src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&auto=format&fit=crop&q=80" alt="Downloading SNGPL bill on smartphone mobile browser" caption="Getting your duplicate SNGPL bill on mobile takes less than a minute" />
              <p>Downloading your SNGPL duplicate bill on a smartphone is just as easy as on a computer. The SNGPL bill checker website is mobile-responsive, adapting automatically to smaller screens and touch navigation.</p>
              <p><strong>For Android (Google Chrome):</strong></p>
              <ol>
                <li>Open Google Chrome on your Android phone</li>
                <li>Tap the address bar and type <code>billchecker.sngpl.com.pk</code>, then tap Go</li>
                <li>Enter your consumer number in the field on the mobile-optimized interface</li>
                <li>Tap Get Bill or Search</li>
                <li>When the bill appears, tap the Download PDF button</li>
                <li>If Chrome shows a download notification, tap Open or allow the download</li>
                <li>The PDF saves to your Downloads folder and can be viewed, shared via WhatsApp, or printed</li>
              </ol>
              <p><strong>For iPhone/iPad (Safari):</strong></p>
              <ol>
                <li>Open Safari on your iPhone or iPad</li>
                <li>Type <code>billchecker.sngpl.com.pk</code> in the address bar and tap Go</li>
                <li>Enter your consumer number and tap Get Bill</li>
                <li>When the PDF link appears, tap it. The PDF opens in Safari&apos;s built-in viewer</li>
                <li>Tap the Share button (the box with an upward arrow) at the bottom of the screen</li>
                <li>Choose &quot;Save to Files&quot; to store the PDF in iCloud Drive or on your iPhone</li>
                <li>Alternatively, tap &quot;Save to Photos&quot; if the bill renders as an image, or tap AirDrop to send to another Apple device</li>
              </ol>
              <p>Once saved to your device, the PDF bill can be sent via WhatsApp or email to anyone who needs it, used for bank payment, or kept as a permanent record. For organizing your bills, consider creating a dedicated folder in your phone&apos;s Files app labeled &quot;SNGPL Bills&quot; and saving each month&apos;s bill there with the month and year in the filename.</p>
            </section>

            <AdUnit slot="1234567890" className="my-8" />

            {/* Section 4 */}
            <section id="method-app" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Method 3: SNGPL Mobile App</h2>
              <p>The SNGPL Consumer Mobile App is the most feature-rich way to access your bills. Unlike the website which shows only the current bill, the app maintains a full 12-month billing history, allowing you to download past bills as well as your current one.</p>
              <p><strong>Installing the SNGPL Consumer App:</strong></p>
              <ul>
                <li><strong>Android:</strong> Open Google Play Store, search for &quot;SNGPL Consumer App,&quot; and install the official app published by Sui Northern Gas Pipelines Limited. Requires Android 5.0 or higher.</li>
                <li><strong>iOS (iPhone/iPad):</strong> Open the Apple App Store, search for &quot;SNGPL Consumer App,&quot; and download the official app. Requires iOS 12 or higher.</li>
              </ul>
              <p><strong>Using the app to download your bill:</strong></p>
              <ol>
                <li>Open the SNGPL Consumer App</li>
                <li>You can use the app as a guest (enter consumer number directly) or register for a full account with your mobile number for persistent access</li>
                <li>Enter your consumer number when prompted</li>
                <li>The current bill appears on the home screen with the full breakdown and due date</li>
                <li>Tap the Download icon or the &quot;Download Bill&quot; button to save the PDF</li>
                <li>To access older bills, tap &quot;Bill History&quot; and select the desired month from the list</li>
                <li>Each historical bill can be individually downloaded as a PDF or shared directly via WhatsApp, email, or any other app</li>
              </ol>
              <p>The app&apos;s share functionality makes it particularly useful for sending your bill to family members, landlords, or banks without printing anything. Simply tap the Share button and choose WhatsApp, Gmail, or any other communication app on your phone.</p>
            </section>

            {/* Section 5 */}
            <section id="method-whatsapp" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Method 4: WhatsApp Service</h2>
              <p>SNGPL has introduced a WhatsApp-based bill inquiry service as part of its digital customer service expansion. This service allows consumers to receive their bill information directly in WhatsApp &mdash; useful especially for consumers who are very comfortable with WhatsApp but less familiar with web browsers or apps.</p>
              <p>To use the SNGPL WhatsApp service, save the official SNGPL WhatsApp number to your phone contacts (visit the SNGPL official website or call 1199 to confirm the current WhatsApp number, as these can change). Open WhatsApp, find the SNGPL contact, and send a message containing your consumer number (just the number, nothing else). The automated SNGPL system responds with your current bill details and may provide a link to download the PDF.</p>
              <p>For best results, use the same mobile number that is registered with your SNGPL account. The system may use your registered number for verification purposes. If you are using a different number, the bill information is still typically provided as it is publicly accessible data tied to the consumer number.</p>
              <p>The WhatsApp service is particularly valuable for consumers in areas with slow internet, as WhatsApp is highly optimized for low-bandwidth connections. If the service sends a PDF link, you can download it over a slow connection more reliably than loading the full SNGPL website.</p>
              <div className="warn-box">
                <strong>Note:</strong> WhatsApp bill services from utilities are a relatively new offering in Pakistan and details (specific WhatsApp number, available features) may evolve. Always verify the WhatsApp number from SNGPL&apos;s official website to avoid sending your consumer information to fraudulent numbers.
              </div>
            </section>

            <AdUnit slot="1234567890" className="my-8" />

            {/* Section 6 */}
            <section id="method-sms" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Method 5: SMS Inquiry</h2>
              <p>For consumers without a smartphone or reliable internet access, SNGPL&apos;s SMS inquiry service provides a basic bill check via standard text messaging. While SMS does not provide a downloadable bill PDF, it delivers the essential information you need: current bill amount, due date, and billing period.</p>
              <p>To use the SMS service, send a text message containing only your consumer number to the SNGPL SMS inquiry short code. Check the SNGPL official website or call 1199 for the current SMS code, as service numbers are periodically updated. Within a few minutes, SNGPL&apos;s system sends an automated reply SMS with your bill amount and due date.</p>
              <p>Normal SMS charges as per your mobile tariff will apply for sending the message. The incoming SMS reply from SNGPL is typically free of charge as it is sent from a short code. This service works on all mobile phones &mdash; smartphones and basic feature phones alike &mdash; making it the most universally accessible bill inquiry method for consumers in areas with limited connectivity.</p>
              <p>While the SMS response gives you the critical payment information (amount and due date), it does not serve as a formal bill for documentation purposes. For payment at bank branches, the cashier only needs your consumer number, so SMS confirmation is sufficient to know what amount to pay. For formal documentation purposes, use the portal, app, or office method.</p>
            </section>

            {/* Section 7 */}
            <section id="method-office" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Method 6: Visit SNGPL Office</h2>
              <p>If digital methods are not working for you, or if you need a certified/stamped physical copy of your bill, visiting an SNGPL office in person is the most reliable fallback. SNGPL has Sub-Divisional Offices (SDOs) and Divisional Offices in all major cities and towns they serve across Punjab and KPK.</p>
              <p>When visiting an SNGPL office for a duplicate bill, bring your original CNIC and your consumer number. If you do not know your consumer number, your CNIC plus the address of the gas connection will be sufficient for the staff to look up your account in their system.</p>
              <p>The process at the office is straightforward: go to the customer service counter, present your CNIC and consumer number, state that you need a duplicate bill, and the staff will generate and print your current (or requested month&apos;s) bill from their system. This service is provided free of charge. The printed duplicate from the SNGPL office carries the same weight as the original mailed bill and is accepted by all banks and institutions.</p>
              <p>SNGPL office hours are generally Monday through Friday, 8:00 AM to 4:00 PM. Some larger offices may have extended hours. Avoid visiting during the first and last few days of the month when offices are busiest with bill payment rush and new connection requests. Mid-month visits tend to have shorter wait times.</p>
              <p>If the distance to an SNGPL office is impractical, consider whether any other digital method can meet your need. For most payment and verification purposes, a downloaded PDF from the official website or app is fully equivalent to an office-printed copy.</p>
            </section>

            <AdUnit slot="1234567890" className="my-8" />

            {/* Section 8 */}
            <section id="print-guide" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Print Your SNGPL Bill</h2>
              <SectionImage src="https://images.unsplash.com/photo-1554224154-26032fced8bd?w=1200&auto=format&fit=crop&q=80" alt="Printed SNGPL gas bill document" caption="Printing your SNGPL duplicate bill at home or at a print shop is quick and easy" />
              <p>Once you have your bill as a PDF, printing it is straightforward. A printed duplicate bill is useful for keeping physical records, bringing to bank branches for over-counter payments, or submitting for official documentation purposes.</p>
              <p><strong>Printing from a computer:</strong> Open the PDF in any PDF viewer (your browser, Adobe Acrobat Reader, or Windows PDF viewer). Press Ctrl+P (or Cmd+P on Mac) to open the print dialog. Set the paper size to A4, orientation to Portrait, and ensure scaling is set to &quot;Fit to page&quot; or 100% (do not reduce below 90% or some bill details may become too small to read). Click Print. Color printing is not required &mdash; black and white prints are perfectly legible and widely accepted.</p>
              <p><strong>Printing from a mobile phone:</strong> Open the PDF on your phone. For Android, tap the Share icon and select &quot;Print&quot; if you have a compatible printer connected via Wi-Fi or Bluetooth. On iPhone, tap the Share icon and select Print. If you do not have a printer at home, save the PDF to your phone and take it to a photocopy or print shop. Most print shops in Pakistan accept files via WhatsApp, USB drive, or email.</p>
              <p><strong>Common printing issues and fixes:</strong> If the printed bill has cut-off edges, ensure &quot;Fit to page&quot; or &quot;Shrink to fit&quot; is selected in print settings. If text appears too small, try printing at 100% rather than &quot;Fit to page.&quot; If the PDF appears blank when printing, try a different PDF viewer (download Adobe Acrobat Reader if needed). For color issues, check that your printer is not low on ink.</p>
            </section>

            {/* Section 9 */}
            <section id="pdf-guide" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Converting &amp; Saving as PDF</h2>
              <p>If you cannot directly download the SNGPL bill as a PDF from the website (due to browser compatibility issues or the button not working), you can still save the bill as a PDF using your browser&apos;s built-in print-to-PDF functionality.</p>
              <p><strong>Save as PDF from Chrome on computer:</strong> When the bill is displayed on screen, press Ctrl+P to open the print dialog. In the &quot;Destination&quot; or &quot;Printer&quot; dropdown, select &quot;Save as PDF&quot; (this is a built-in Chrome option, no printer needed). Click &quot;Save&quot; and choose where to save the PDF on your computer.</p>
              <p><strong>Save as PDF on mobile Chrome:</strong> Tap the three-dot menu (&vellip;) and select Print. In the print dialog, tap the printer dropdown at the top and select &quot;Save as PDF.&quot; Tap the download icon to save. The PDF will be in your Downloads folder.</p>
              <p><strong>Organizing your bill PDFs:</strong> Good file organization saves time when you need to reference old bills. Create a folder structure like: Gas Bills &rarr; 2024 &rarr; October, November, December. Name each file with the month, year, and amount (e.g., &quot;SNGPL_2024_Nov_Rs2450.pdf&quot;). This makes it instantly clear what each file contains without opening it.</p>
              <p><strong>PDF viewers recommended:</strong> Adobe Acrobat Reader (free, available for all platforms) is the gold standard for viewing and printing PDFs. On mobile, Foxit PDF Reader is a lighter alternative. On Windows, the built-in Microsoft Edge browser can open PDFs directly. Most modern browsers (Chrome, Firefox, Safari) also have built-in PDF viewing capability.</p>
            </section>

            {/* Section 10 — FAQ */}
            <section id="faq" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <FAQ items={faqItems} pageUrl="https://utilitybillhub.pk/pakistan/sngpl-duplicate-bill" />
            </section>

            <div className="section-divider" />
            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <Link href="/pakistan/sngpl-bill-check-online" className="card hover:shadow-md transition-all no-underline group">
                <div className="text-2xl mb-2">🔍</div>
                <div className="font-bold text-gray-900 group-hover:text-blue-700 mb-1">Check your SNGPL bill online</div>
                <div className="text-sm text-gray-500">Full guide with step-by-step instructions →</div>
              </Link>
              <Link href="/pakistan/how-to-pay-sngpl-bill" className="card hover:shadow-md transition-all no-underline group">
                <div className="text-2xl mb-2">💳</div>
                <div className="font-bold text-gray-900 group-hover:text-blue-700 mb-1">Pay your SNGPL bill online</div>
                <div className="text-sm text-gray-500">Easypaisa, JazzCash, banking &amp; ATM →</div>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden xl:block w-72 flex-shrink-0">
            <div className="sticky top-20 space-y-6">
              <AdUnit slot="1234567890" format="rectangle" />
              <div className="card">
                <h3 className="text-base font-bold text-gray-900 mb-3">Get Your Bill Now</h3>
                <ul className="space-y-2 list-none pl-0 mb-0">
                  <li><a href="https://billchecker.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 hover:text-blue-900 no-underline font-medium">🔗 SNGPL Bill Checker ↗</a></li>
                  <li><a href="https://selfservice.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 hover:text-blue-900 no-underline">Consumer Portal ↗</a></li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500">SNGPL Helpline</div>
                  <div className="text-lg font-bold text-blue-800">1199</div>
                </div>
              </div>
              <div className="card">
                <h3 className="text-base font-bold text-gray-900 mb-3">Related Guides</h3>
                <ul className="space-y-2 list-none pl-0 mb-0">
                  <li><Link href="/pakistan/sngpl-bill-check-online" className="text-sm text-blue-700 no-underline">🔍 Check SNGPL Bill</Link></li>
                  <li><Link href="/pakistan/how-to-pay-sngpl-bill" className="text-sm text-blue-700 no-underline">💳 Pay SNGPL Bill</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
