import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import TableOfContents from '../../components/TableOfContents';
import FAQ from '../../components/FAQ';
import AdUnit from '../../components/AdUnit';
import SectionImage from '../../components/SectionImage';

export const metadata: Metadata = {
  title: 'How to Pay SNGPL Bill Online 2024 — Easypaisa, JazzCash, Bank Guide',
  description: 'Complete guide to paying your SNGPL gas bill online. Easypaisa, JazzCash, online banking, ATM, and bank branch payment with step-by-step instructions.',
  alternates: { canonical: 'https://utilitybillhub.pk/pakistan/how-to-pay-sngpl-bill' },
};

const tocItems = [
  { id: 'payment-overview', label: 'Payment Methods Overview' },
  { id: 'easypaisa', label: 'Easypaisa Payment Guide' },
  { id: 'jazzcash', label: 'JazzCash Payment Guide' },
  { id: 'online-banking', label: 'Online Banking (HBL, UBL, MCB)' },
  { id: 'atm-payment', label: 'ATM Payment Guide' },
  { id: 'bank-branch', label: 'Bank Branch / Over Counter' },
  { id: 'sngpl-portal', label: 'SNGPL Official Portal Payment' },
  { id: 'verify-payment', label: 'Verifying Your Payment' },
  { id: 'late-payment', label: 'Late Fees & Avoiding Disconnection' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Pay SNGPL Gas Bill Online',
  description: 'Step-by-step guide to paying your SNGPL gas bill using Easypaisa, JazzCash, online banking, ATM, and bank branch.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Choose a payment method', text: 'Select from Easypaisa, JazzCash, online banking, ATM, or bank branch.' },
    { '@type': 'HowToStep', position: 2, name: 'Have your consumer number ready', text: 'You will need your 10-12 digit SNGPL consumer number for all payment methods.' },
    { '@type': 'HowToStep', position: 3, name: 'Open the payment app or portal', text: 'Launch Easypaisa, JazzCash, or your bank mobile app.' },
    { '@type': 'HowToStep', position: 4, name: 'Navigate to utility bill payment', text: 'Find the SNGPL gas bill payment option under utility or bill payments.' },
    { '@type': 'HowToStep', position: 5, name: 'Enter your consumer number', text: 'Type your consumer number to fetch the current bill amount.' },
    { '@type': 'HowToStep', position: 6, name: 'Verify the amount and confirm', text: 'Check the bill amount matches your actual bill before confirming.' },
    { '@type': 'HowToStep', position: 7, name: 'Complete payment and save receipt', text: 'Authorize the payment and save or screenshot the confirmation receipt.' },
  ],
};

const faqItems = [
  { q: 'Can I pay part of my SNGPL bill?', a: 'SNGPL generally requires full payment of the billed amount by the due date. Partial payments may be applied to your account but the remaining balance will accrue late payment surcharges. If you are facing financial difficulty, contact SNGPL at 1199 to inquire about installment options for large bills.' },
  { q: 'What if I pay the wrong amount?', a: 'If you overpay, the excess amount is credited to your account and automatically deducted from your next bill. If you underpay, the shortfall plus a late surcharge will appear on your next bill. For significant overpayments, you can request a refund through the SNGPL consumer portal or SDO office.' },
  { q: 'How long does it take for payment to reflect on my SNGPL account?', a: 'Easypaisa, JazzCash, and SNGPL portal payments are typically reflected within a few hours to 24 hours. Online banking transfers may take 24-48 hours. ATM payments are usually reflected within 24 hours. Bank branch payments may take 1-2 business days depending on the bank\'s processing.' },
  { q: 'Is Easypaisa payment safe for SNGPL bills?', a: 'Yes, Easypaisa is an officially supported SNGPL payment channel and uses bank-grade security for all transactions. The SNGPL biller is registered in Easypaisa\'s system, so the consumer number lookup directly fetches the correct bill amount, reducing the risk of payment errors.' },
  { q: 'Do I need to create an account to pay SNGPL bill online?', a: 'For Easypaisa and JazzCash, you need an account (or at least the app installed). For SNGPL\'s own portal, you may pay as a guest using a debit/credit card. For bank mobile apps, you need your bank account. Over-the-counter bank branch payment requires no digital account.' },
  { q: 'Can I pay for someone else\'s SNGPL bill?', a: 'Yes, you can pay anyone\'s SNGPL bill as long as you have their correct consumer number. The payment will be applied to that consumer\'s account regardless of who makes the payment. This is useful for paying bills for elderly parents, landlords, or tenants.' },
  { q: 'What payment methods does SNGPL officially support?', a: 'SNGPL officially supports: Easypaisa, JazzCash, 1-Link interbank payment (available via most bank ATMs and internet banking), bank branch payment at all major commercial banks, the SNGPL self-service portal (debit/credit cards), and Pakistan Post offices for over-counter payment.' },
  { q: 'Can I pay multiple months of SNGPL bills at once?', a: 'You can pay accumulated arrears plus current bill together, as the SNGPL system presents the total outstanding balance. You cannot pay future bills in advance through the standard consumer channels. If you have missed months, the total outstanding will be shown and you can pay it in one transaction.' },
  { q: 'What is the minimum amount I can pay?', a: 'There is no formal minimum payment amount set by SNGPL for over-the-counter or digital payments. However, to avoid late surcharges, you should pay at minimum the current bill amount. Fixed network charges and meter rent mean even low-consumption bills will have a minimum chargeable amount.' },
  { q: 'Is there any service charge for online SNGPL bill payment?', a: 'Easypaisa and JazzCash currently process SNGPL bill payments free of charge for the consumer. SNGPL portal card payments may or may not have processing fees depending on your card type. Bank internet banking and ATM bill payment is generally free, though individual banks\' policies may vary.' },
  { q: 'What if my payment failed but money was deducted from my account?', a: 'This is called a "stuck" or "failed" transaction. First, wait 24-48 hours as the funds often auto-reverse. If the money does not return, contact your payment provider (Easypaisa, JazzCash, or your bank) with the transaction reference number. Keep all payment screenshots as evidence for the dispute process.' },
  { q: 'Can I set up automatic bill payment for SNGPL?', a: 'Some banks like HBL and UBL offer scheduled or recurring bill payment features in their mobile apps where you can set up SNGPL as a biller and schedule automatic payment around your bill due date. This is not a full auto-debit but a payment reminder/scheduled transfer that you can configure.' },
  { q: 'What if my due date passes on a Sunday or public holiday?', a: 'If the due date falls on a Sunday or public holiday, SNGPL generally extends the payment deadline to the next working business day without surcharge, particularly for bank branch payments. For digital payments (Easypaisa, JazzCash, online banking), these channels are available 24/7 including holidays.' },
  { q: 'How to get a payment receipt from SNGPL?', a: 'For digital payments, your payment app or bank will provide a digital receipt or confirmation SMS. For bank branch payments, the bank will stamp your bill as paid receipt. You can also verify payment on SNGPL\'s bill checker which will show an updated zero or reduced balance after processing.' },
  { q: 'Can I pay via credit card?', a: 'Yes, the SNGPL self-service portal (selfservice.sngpl.com.pk) accepts Visa and Mastercard debit and credit cards for bill payment. Some third-party payment platforms may also support credit card payment for utility bills. Check your card provider\'s terms as cash advance fees may apply for credit card utility payments.' },
  { q: 'What is the difference between SNGPL consumer account number and consumer number?', a: 'These terms are often used interchangeably by SNGPL. Your consumer number (also sometimes called your account number or connection number) is the same 10-12 digit identifier used for bill checking and payment. If you see both fields, they refer to the same number unless specifically differentiated on your bill.' },
  { q: 'How do I know my SNGPL bill is paid successfully?', a: 'After payment, you will receive a confirmation from your payment channel (SMS from Easypaisa/JazzCash, bank notification). Within 24-48 hours, check billchecker.sngpl.com.pk — the outstanding balance should show zero or only the next billing cycle amount. A paid stamp on the bill image is the most reliable confirmation.' },
  { q: 'Can I pay my SNGPL bill at a post office?', a: 'Yes, Pakistan Post offices authorized for bill collection can accept SNGPL bill payments over the counter. Not all post offices provide this service. Look for Post Office branches that display utility bill payment as an available service, typically in urban areas.' },
  { q: 'Is there a payment limit per transaction for SNGPL?', a: 'Easypaisa and JazzCash have transaction limits based on your account verification level (typically Rs. 25,000-100,000 per transaction for verified accounts). Bank transfers may have higher limits. If your bill exceeds your wallet\'s transaction limit, pay via bank branch or split into multiple transactions using different channels.' },
  { q: 'What to do if SNGPL says bill is unpaid even after payment?', a: 'First, allow 48 hours for the payment to propagate through SNGPL\'s systems. If the issue persists after 48 hours, call SNGPL helpline 1199 with your consumer number and payment transaction reference number. Bring your payment receipt or screenshot to the nearest SDO office if the helpline cannot resolve it remotely.' },
];

export default function PaySNGPLBillPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <BreadcrumbNav crumbs={[{ label: 'Pakistan', href: '/pakistan' }, { label: 'How to Pay SNGPL Bill' }]} />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">💳 Payment Guide</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">How to Pay SNGPL Bill Online 2024 — Complete Guide</h1>
          <p className="text-xl text-gray-500 max-w-3xl">Pay your SNGPL gas bill easily using Easypaisa, JazzCash, internet banking, ATM, or bank branch. Step-by-step instructions for every payment method available in Pakistan.</p>
        </div>

        <div className="flex gap-8 items-start">
          <div className="flex-1 min-w-0">
            <TableOfContents items={tocItems} />

            {/* Section 1 */}
            <section id="payment-overview" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-4">Payment Methods Overview</h2>
              <SectionImage src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop&q=80" alt="Various digital payment methods for utility bills" caption="SNGPL supports multiple payment channels for maximum consumer convenience" priority />
              <p>SNGPL consumers have more payment options than ever before. Whether you prefer digital payments from the comfort of your home or the reassurance of an over-the-counter transaction at a bank branch, there is a method that suits your needs. Understanding all available channels helps you choose the fastest, most convenient option for your situation.</p>
              <p>Before paying by any method, make sure you have your SNGPL consumer number ready, have checked your current bill amount (via billchecker.sngpl.com.pk), noted the due date, and have sufficient funds in your payment account. Paying the correct amount is critical &mdash; overpayment creates a credit balance while underpayment leaves you exposed to late surcharges.</p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr><th>Payment Method</th><th>Processing Time</th><th>Consumer Charges</th><th>Best For</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Easypaisa</td><td>Instant</td><td>Free</td><td>Mobile users without bank account</td></tr>
                    <tr><td>JazzCash</td><td>Instant</td><td>Free</td><td>Mobile users, Jazz SIM holders</td></tr>
                    <tr><td>Online Banking</td><td>Instant – 2 hours</td><td>Free</td><td>Bank account holders</td></tr>
                    <tr><td>ATM</td><td>Instant – 24 hrs</td><td>Bank fee may apply</td><td>Non-internet users</td></tr>
                    <tr><td>Bank Branch</td><td>Same day</td><td>Free</td><td>Traditional, cash customers</td></tr>
                    <tr><td>SNGPL Portal</td><td>Instant</td><td>Free (card fees vary)</td><td>Debit/credit card holders</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <AdUnit slot="1234567890" className="my-8" />

            {/* Section 2 */}
            <section id="easypaisa" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Easypaisa Payment Guide</h2>
              <SectionImage src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=80" alt="Mobile payment via Easypaisa app" caption="Easypaisa allows instant SNGPL bill payment directly from your smartphone" />
              <p>Easypaisa is Pakistan&apos;s pioneering mobile financial service, launched by Telenor Pakistan. It has grown into one of the country&apos;s largest digital payment platforms, serving millions of consumers across Pakistan including those without traditional bank accounts. Easypaisa&apos;s utility bill payment feature supports SNGPL and is one of the most popular ways to pay gas bills.</p>
              <p><strong>Method 1: Easypaisa App (Android/iOS)</strong></p>
              <ol>
                <li>Download and open the Easypaisa app from Google Play Store or Apple App Store</li>
                <li>Log in with your registered mobile number and MPIN</li>
                <li>From the home screen, tap <strong>Bill Payments</strong></li>
                <li>Select <strong>Utility Bills</strong></li>
                <li>Choose <strong>Gas</strong> as the utility type</li>
                <li>Select <strong>SNGPL</strong> from the list of gas providers</li>
                <li>Enter your 10-12 digit SNGPL consumer number</li>
                <li>The app will automatically fetch your current bill amount &mdash; verify it matches your bill</li>
                <li>Tap <strong>Pay</strong> and enter your MPIN to authorize the transaction</li>
                <li>A payment confirmation screen and SMS will confirm success. Screenshot or save the reference number.</li>
              </ol>
              <p><strong>Method 2: Easypaisa Agent/Franchise Shop</strong></p>
              <p>If you do not have the app or smartphone, visit any Easypaisa agent shop (look for the distinctive orange branding). Tell the agent you want to pay your SNGPL gas bill, provide your consumer number and cash amount. The agent processes the payment and gives you a paper receipt. Keep this receipt as proof of payment.</p>
              <div className="success-box">
                <strong>Tip:</strong> After payment, SNGPL typically updates its records within 2-4 hours. Check billchecker.sngpl.com.pk after this period to confirm the payment has been applied to your account.
              </div>
            </section>

            {/* Section 3 */}
            <section id="jazzcash" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">JazzCash Payment Guide</h2>
              <p>JazzCash is Jazz (formerly Mobilink)&apos;s mobile financial services platform and one of Pakistan&apos;s most widely used digital wallets. Like Easypaisa, it supports SNGPL bill payment both through the app and via USSD for feature phone users.</p>
              <p><strong>Method 1: JazzCash Mobile App</strong></p>
              <ol>
                <li>Open the JazzCash app on your Android or iOS device</li>
                <li>Log in with your registered Jazz number and MPIN</li>
                <li>From the home dashboard, tap <strong>Pay Bills</strong></li>
                <li>Select <strong>Gas Bills</strong></li>
                <li>Choose <strong>SNGPL</strong> as the provider</li>
                <li>Enter your SNGPL consumer number</li>
                <li>The app fetches your current bill amount &mdash; verify the amount is correct</li>
                <li>Tap <strong>Proceed</strong> then enter your MPIN to confirm payment</li>
                <li>Payment is processed instantly. Save the confirmation reference number shown on screen.</li>
              </ol>
              <p><strong>Method 2: JazzCash USSD (for feature/basic phones)</strong></p>
              <p>Dial <code>*786#</code> on your Jazz SIM. Navigate through the menu: Select Pay Bills &rarr; Utility Bills &rarr; Gas &rarr; SNGPL. Enter your consumer number and confirm the payment amount. Enter your MPIN to complete the transaction. This method works without a smartphone or internet connection &mdash; ideal for areas with limited connectivity.</p>
              <div className="info-box">
                <strong>JazzCash Tip:</strong> Ensure your JazzCash account balance is sufficient before initiating payment. Low-balance transactions will fail and the payment will not be processed. Top up your JazzCash wallet via Jazz service centers, authorized agents, or bank transfer before paying your bill.
              </div>
            </section>

            <AdUnit slot="1234567890" className="my-8" />

            {/* Section 4 */}
            <section id="online-banking" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Online Banking (HBL, UBL, MCB)</h2>
              <SectionImage src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&auto=format&fit=crop&q=80" alt="Internet banking on laptop for utility bill payment" caption="Major Pakistani banks offer SNGPL bill payment through their internet and mobile banking platforms" />
              <p>All major Pakistani commercial banks offer SNGPL gas bill payment through their internet banking and mobile banking platforms. This method is ideal for consumers who prefer to pay directly from their bank account without using a separate wallet app. Here are the steps for the most popular banks:</p>
              <p><strong>HBL Internet/Mobile Banking:</strong> Log in to HBL Pay app or HBL internet banking. Go to Payments &rarr; Utility Bills &rarr; Gas &rarr; SNGPL. Enter your consumer number. The current bill amount is fetched automatically. Click Pay. Authorize with OTP sent to your registered mobile. Confirmation displayed and sent via SMS/email.</p>
              <p><strong>UBL Digital:</strong> Log in to UBL Digital App or website. Navigate to Bills &rarr; Add Biller &rarr; Utility &rarr; SNGPL Gas. Enter your consumer number and save as a biller for future payments. To pay, select SNGPL from your saved billers, confirm the amount, and tap Pay Now. You can also schedule future payments using UBL&apos;s scheduled payment feature.</p>
              <p><strong>MCB Mobile:</strong> Open MCB Mobile app. Go to Mobile Banking &rarr; Pay Bills &rarr; Utilities &rarr; SNGPL. Enter consumer number, verify bill amount, and confirm payment. MCB also offers bill payment via MCB internet banking at the same location in their online portal.</p>
              <p><strong>Allied Bank (ABL Smart):</strong> Log in to ABL Smart app. Navigate to Payments &rarr; Utility &rarr; Gas &rarr; SNGPL. Enter consumer number and pay. Allied Bank also supports the 1-Link interbank payment network for SNGPL bills.</p>
              <p><strong>Meezan Bank (Meezan Mobile):</strong> Open Meezan Mobile app. Go to Utilities &rarr; Gas &rarr; SNGPL. Enter consumer number, verify the bill amount fetched by the system, and authorize payment with your transaction password or biometric.</p>
              <div className="warn-box">
                <strong>Security Note:</strong> Always access your bank app or website directly &mdash; never click links in SMS or email claiming to be from your bank. Fraudulent links impersonating bank payment portals are a common scam in Pakistan. Type the bank&apos;s URL directly in your browser or use the official app from Play Store/App Store.
              </div>
            </section>

            {/* Section 5 */}
            <section id="atm-payment" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">ATM Payment Guide</h2>
              <SectionImage src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1200&auto=format&fit=crop&q=80" alt="ATM machine for utility bill payment" caption="Most major bank ATMs in Pakistan support SNGPL bill payment via the 1-Link network" />
              <p>ATM bill payment is an excellent option for consumers who have a bank account and debit card but prefer not to use mobile banking apps. Most ATMs in Pakistan connected to the 1-Link interbank network support utility bill payment including SNGPL gas bills.</p>
              <p>Banks with ATMs supporting SNGPL bill payment include HBL, UBL, ABL, Bank Alfalah, MCB, and Meezan Bank, among others. The process is broadly similar across all these banks:</p>
              <ol>
                <li>Insert your debit card into the ATM and enter your PIN</li>
                <li>From the main menu, select <strong>Other Services</strong> or <strong>Bill Payment</strong></li>
                <li>Choose <strong>Utility Bills</strong></li>
                <li>Select <strong>Gas</strong> as the utility type</li>
                <li>Choose <strong>SNGPL</strong> from the list of utility companies</li>
                <li>Enter your SNGPL consumer number using the ATM keypad</li>
                <li>The ATM will display your current bill amount &mdash; verify it is correct</li>
                <li>Confirm the payment. The amount is deducted from your linked account.</li>
                <li>Collect your ATM receipt. This is your proof of payment &mdash; keep it until the next bill confirms payment.</li>
              </ol>
              <p><strong>Important Note:</strong> Some ATMs require you to pre-register SNGPL as a biller in your bank account (via internet banking or branch) before you can make ATM bill payments. Check your bank&apos;s specific requirements. Also note that ATM bill payments have daily transaction limits which vary by bank &mdash; typically Rs. 25,000 to Rs. 100,000 per day.</p>
            </section>

            <AdUnit slot="1234567890" className="my-8" />

            {/* Section 6 */}
            <section id="bank-branch" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Bank Branch / Over Counter Payment</h2>
              <p>For consumers who prefer in-person transactions or who are not comfortable with digital payment methods, paying your SNGPL bill at a bank branch over the counter remains a fully supported and reliable option.</p>
              <p>Virtually all major commercial banks in Pakistan accept SNGPL gas bill payments over the counter, including HBL, UBL, MCB, Allied Bank, Bank Alfalah, Meezan Bank, Habib Metro, Bank Al Habib, and many others. Some banks have designated utility bill payment counters to make the process faster during peak periods.</p>
              <p><strong>Process for bank branch payment:</strong></p>
              <ul>
                <li>Bring your original SNGPL bill (or a copy, or just your consumer number written on paper)</li>
                <li>Visit any branch of a major commercial bank during banking hours</li>
                <li>Approach the cashier and state that you want to pay your SNGPL gas bill</li>
                <li>Provide your consumer number (or hand the cashier your bill)</li>
                <li>The cashier enters your consumer number, the system fetches the bill amount</li>
                <li>Pay the exact bill amount in cash (or via debit from your account if you have an account at that bank)</li>
                <li>The cashier stamps your bill as &quot;PAID&quot; and provides a computer-generated receipt</li>
                <li>Keep both the stamped bill and the receipt until your next bill confirms the payment</li>
              </ul>
              <p><strong>Bank hours for bill payment:</strong> Commercial banks are typically open Monday through Friday from 9:00 AM to 5:00 PM, with some branches open Saturday from 9:00 AM to 1:00 PM. Utility bill payment counters at some branches may close earlier than general banking hours, so it is best to visit before 4:00 PM on weekdays.</p>
              <p>Pakistan Post offices also accept SNGPL bill payments at select branches. Post Office payment is convenient for consumers in areas with fewer bank branches and provides the same level of payment confirmation via stamped receipt.</p>
            </section>

            {/* Section 7 */}
            <section id="sngpl-portal" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SNGPL Official Portal Payment</h2>
              <p>SNGPL operates its own consumer self-service portal at <strong>selfservice.sngpl.com.pk</strong>, which allows consumers to pay bills directly using debit or credit cards and digital wallets &mdash; without going through a third-party app.</p>
              <p><strong>Accepted payment methods on the SNGPL portal:</strong> Visa debit/credit cards, Mastercard debit/credit cards, JazzCash, and Easypaisa are accepted directly on the portal. This makes it the most versatile single-stop payment option for consumers who prefer paying directly to SNGPL rather than through an intermediary.</p>
              <ol>
                <li>Go to <a href="https://selfservice.sngpl.com.pk" target="_blank" rel="noopener noreferrer">selfservice.sngpl.com.pk</a> in your browser</li>
                <li>Click on <strong>Pay Bill</strong> or <strong>Bill Payment</strong></li>
                <li>Enter your consumer number in the field provided</li>
                <li>Your current bill details will appear on screen &mdash; verify the amount</li>
                <li>Select your preferred payment method (card, JazzCash, or Easypaisa)</li>
                <li>For card payment: enter your card number, expiry date, and CVV</li>
                <li>Complete 3D Secure authentication (OTP sent to your card-registered phone)</li>
                <li>Payment is processed and a receipt is displayed. Download or screenshot for records.</li>
              </ol>
              <div className="info-box">
                <strong>Security:</strong> The SNGPL portal uses SSL encryption (look for the padlock icon in your browser&apos;s address bar). Your card details are processed through a PCI-DSS compliant payment gateway. Never enter card details on any website that is not the official SNGPL domain.
              </div>
            </section>

            <AdUnit slot="1234567890" className="my-8" />

            {/* Section 8 */}
            <section id="verify-payment" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Verifying Your Payment</h2>
              <p>After making an SNGPL bill payment through any channel, always verify that the payment has been successfully applied to your account. Do not assume payment is reflected simply because the transaction was confirmed by your payment provider &mdash; there can occasionally be delays in the data flowing from the payment gateway to SNGPL&apos;s billing system.</p>
              <p><strong>How to verify via SNGPL website:</strong> Wait 2-24 hours after payment (longer for bank branch payments). Visit billchecker.sngpl.com.pk and enter your consumer number. If payment has been applied, the outstanding balance should show zero or only reflect any new charges for the next billing cycle. The bill status may show as &quot;Paid.&quot;</p>
              <p><strong>Other verification methods:</strong> Check your Easypaisa or JazzCash transaction history &mdash; a successful payment shows as &quot;Completed&quot; with a reference number. For bank transfers, your bank statement or mobile banking activity feed will show the debit. Call SNGPL helpline 1199 and provide your consumer number &mdash; the agent can confirm payment status on their end.</p>
              <p><strong>If payment is not reflecting after 48 hours:</strong> Keep your payment receipt, screenshot, or reference number. Call SNGPL helpline 1199 and provide your consumer number along with the payment reference, amount, and date. If SNGPL cannot locate the payment within 48-72 hours, visit your nearest SDO office with proof of payment for manual investigation and reconciliation.</p>
              <div className="success-box">
                <strong>Good Practice:</strong> Take a screenshot of every payment confirmation screen and save it in a dedicated album on your phone labeled &quot;SNGPL Payments.&quot; This gives you immediate proof of payment for any future disputes without searching through transaction histories.
              </div>
            </section>

            {/* Section 9 */}
            <section id="late-payment" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Late Fees &amp; Avoiding Disconnection</h2>
              <p>Missing your SNGPL bill payment due date has real financial consequences. Understanding the late payment structure and knowing your options can help you minimize damage and avoid disconnection.</p>
              <p><strong>Late Payment Surcharge:</strong> SNGPL applies a surcharge of 10% of the current month&apos;s bill plus a flat Rs. 50 default surcharge for each month of late payment. For example, if your bill is Rs. 2,000 and you pay one month late, an additional Rs. 250 (10% of Rs. 2,000 + Rs. 50) will appear on your next bill as arrears. This compounds if you miss multiple months.</p>
              <p><strong>Disconnection Timeline:</strong> SNGPL typically issues a formal disconnection notice after 2 consecutive months of non-payment. The notice gives you a final deadline to clear all dues. If dues are not cleared by the disconnection notice deadline, your gas supply is physically disconnected by SNGPL field staff. Reconnection requires payment of all arrears, surcharges, and a reconnection fee typically ranging from Rs. 500 to Rs. 1,500 depending on connection type and region.</p>
              <p><strong>Avoiding Late Fees:</strong></p>
              <ul>
                <li>Set a monthly calendar reminder on your phone 7 days before your typical due date</li>
                <li>Sign up for SMS bill notifications from SNGPL (call 1199 to register your mobile number)</li>
                <li>Use the SNGPL Consumer App which displays your current bill and due date on the home screen</li>
                <li>Consider setting up a scheduled payment in your bank&apos;s mobile app to automatically pay around the due date each month</li>
              </ul>
              <p><strong>If you cannot pay on time:</strong> Contact SNGPL helpline 1199 as soon as possible. In genuine hardship situations, SNGPL may offer a short payment extension or installment plan for large outstanding amounts. Communicating proactively is far better than going silent and facing disconnection.</p>
            </section>

            {/* Section 10 — FAQ */}
            <section id="faq" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <FAQ items={faqItems} pageUrl="https://utilitybillhub.pk/pakistan/how-to-pay-sngpl-bill" />
            </section>

            <div className="section-divider" />
            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <Link href="/pakistan/sngpl-bill-check-online" className="card hover:shadow-md transition-all no-underline group">
                <div className="text-2xl mb-2">🔍</div>
                <div className="font-bold text-gray-900 group-hover:text-blue-700 mb-1">Check your SNGPL bill online first</div>
                <div className="text-sm text-gray-500">Find out your bill amount before paying →</div>
              </Link>
              <Link href="/pakistan/sngpl-duplicate-bill" className="card hover:shadow-md transition-all no-underline group">
                <div className="text-2xl mb-2">📄</div>
                <div className="font-bold text-gray-900 group-hover:text-blue-700 mb-1">Download your duplicate SNGPL bill</div>
                <div className="text-sm text-gray-500">Lost your bill? Get a duplicate copy →</div>
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
                  <li><Link href="/pakistan/sngpl-bill-check-online" className="text-sm text-blue-700 hover:text-blue-900 no-underline">🔍 Check SNGPL Bill</Link></li>
                  <li><Link href="/pakistan/sngpl-duplicate-bill" className="text-sm text-blue-700 hover:text-blue-900 no-underline">📄 Duplicate Bill</Link></li>
                  <li><Link href="/global/how-to-pay-utility-bills" className="text-sm text-blue-700 hover:text-blue-900 no-underline">🌐 Global Payment Guide</Link></li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-base font-bold text-gray-900 mb-3">Payment Channels</h3>
                <ul className="space-y-2 list-none pl-0 mb-0">
                  <li><a href="https://www.easypaisa.com.pk" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 hover:text-blue-900 no-underline">Easypaisa ↗</a></li>
                  <li><a href="https://www.jazzcash.com.pk" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 hover:text-blue-900 no-underline">JazzCash ↗</a></li>
                  <li><a href="https://selfservice.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-700 hover:text-blue-900 no-underline">SNGPL Portal ↗</a></li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500">SNGPL Helpline</div>
                  <div className="text-lg font-bold text-blue-800">1199</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
