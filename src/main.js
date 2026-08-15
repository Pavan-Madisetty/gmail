const TODAY = '2026-08-14';
const SBI_ATTACHMENT = './assets/AccountStatement_13082026_211903.pdf';
const SBI_SENDER = 'cbssbi.cas@alerts.sbi.bank.in';
const SBI_SUBJECT = 'Statement of your SBI AccountNumber XXXXXX70188';

const messageSeeds = [
  ['LinkedIn', 'messages-noreply@linkedin.com', 'Sasi, Priya accepted your connection request', 'You are now connected. See Priya’s recent updates and professional activity.', 'in', '#0a66c2'],
  ['Facebook', 'notification@facebookmail.com', 'You have 4 new notifications', 'Anusha shared a photo, and 3 friends posted updates you may have missed.', 'f', '#1877f2'],
  ['Instagram', 'no-reply@mail.instagram.com', 'sai.designs and 2 others shared new posts', 'See the latest posts and stories from accounts you follow.', '◎', '#d62976'],
  ['cbssbi.cas', SBI_SENDER, SBI_SUBJECT, 'Dear Miss. KATIKALA SAIKALA, your latest monthly account statement is attached.', 'SBI', '#0b72b9', true],
  ['Google Calendar', 'calendar-notification@google.com', 'Reminder: Product design review @ 7:00 PM', 'This is a reminder for your upcoming event scheduled for this evening.', '31', '#4285f4'],
  ['LinkedIn', 'messages-noreply@linkedin.com', 'Sasi, you appeared in 23 searches this week', 'See where your searchers work and what roles they are hiring for.', 'in', '#0a66c2'],
  ['GitHub', 'notifications@github.com', '[gmail-ui] Review requested: responsive inbox polish', 'A review was requested from you on pull request #48.', 'GH', '#24292f'],
  ['Amazon.in', 'shipment-tracking@amazon.in', 'Arriving today: Your Amazon.in order', 'Your package is out for delivery and should arrive by 9 PM.', 'a', '#ff9900'],
  ['HDFC Bank Alerts', 'alerts@hdfcbank.net', 'You have made a UPI transaction', 'Rs. 840.00 was debited from your HDFC Bank account.', 'H', '#004c8f'],
  ['Swiggy', 'no-reply@swiggy.in', 'Your order has been delivered', 'Hope you enjoyed your meal from Meghana Foods. Rate your order.', 'S', '#fc8019'],
  ['Coursera', 'Coursera@email.coursera.org', 'Keep going, Sasi! You are 72% through this course', 'Complete the next module to keep your learning streak alive.', 'C', '#0056d2'],
  ['Notion', 'team@makenotion.com', '3 updates in Engineering workspace', 'Sanjay mentioned you in Gmail UI audit and shared a page.', 'N', '#111111'],
  ['Medium Daily Digest', 'noreply@medium.com', 'The frontend patterns that quietly make products feel premium', 'Five stories selected for you about JavaScript, CSS, and product design.', 'M', '#111111'],
  ['Google', 'no-reply@accounts.google.com', 'Security alert', 'A new sign-in on Mac was detected for your Google Account.', 'G', '#4285f4'],
  ['Figma', 'notifications@figma.com', 'Aditi commented on “Gmail Inbox Exploration”', '“The spacing here looks much closer now.” View the comment in Figma.', 'F', '#a259ff'],
  ['Razorpay', 'no-reply@razorpay.com', 'Payment successful for your order', 'Your payment of ₹1,299.00 was successfully processed.', 'R', '#2b65f9'],
  ['Internshala', 'student@internshala.com', 'Frontend developer internship matches for you', '6 new work-from-home opportunities match your preferences.', 'I', '#00a5ec'],
  ['Microsoft Teams', 'noreply@email.teams.microsoft.com', 'You have new activity in Project Phoenix', 'Rahul mentioned you in the Frontend channel.', 'T', '#5b5fc7'],
  ['Netflix', 'info@account.netflix.com', 'New arrival: A title on your list is now available', 'We just added something you wanted to watch.', 'N', '#e50914'],
  ['Zomato', 'noreply@zomato.com', 'Here is your invoice for yesterday’s order', 'Invoice for order #5840291 is ready to view.', 'Z', '#e23744'],
  ['Canva', 'no-reply@canva.com', 'Sasi, your weekly design recap is here', 'You created 4 designs and collaborated with 3 teammates.', 'C', '#7d2ae8'],
  ['Slack', 'notification@slack.com', 'You have 7 new mentions in Dev Team', 'Catch up on messages from #frontend and #design-systems.', 'S', '#611f69'],
  ['YouTube', 'noreply@youtube.com', 'New videos from channels you follow', 'Fireship, Web Dev Simplified, and 4 others uploaded new videos.', '▶', '#ff0000'],
  ['Apple', 'no_reply@apple.com', 'Your receipt from Apple', 'Receipt for your recent App Store purchase.', 'A', '#555555'],
  ['Jio', 'care@jio.com', 'Recharge successful', 'Your Jio prepaid recharge of ₹399 was successful.', 'J', '#0f3cc9'],
  ['GeeksforGeeks', 'feedback@geeksforgeeks.org', 'Your article has moved to technical review', 'The editorial team left feedback on your draft.', 'GfG', '#2f8d46'],
  ['PW Skills', 'support@pwskills.com', 'Your live JavaScript masterclass starts soon', 'Join the live session and bring your questions.', 'PW', '#5b21b6'],
  ['Cuvette', 'placements@cuvette.tech', '3 new frontend roles selected for your profile', 'Companies are actively reviewing candidates with your skills.', 'CV', '#059669'],
  ['Dropbox', 'no-reply@dropboxmail.com', 'Your weekly activity report', '12 files changed across 3 shared folders.', 'D', '#0061ff'],
  ['Myntra', 'updates@myntra.com', 'Your order has been shipped', 'Track your package and see the expected delivery date.', 'M', '#ff3f6c'],
  ['Google Maps', 'google-maps-noreply@google.com', 'Your July contribution report', 'Your photos and reviews helped over 18,000 people.', 'G', '#34a853'],
  ['MakeMyTrip', 'noreply@makemytrip.com', 'Your Hyderabad to Bengaluru itinerary', 'Booking confirmed. Check-in opens 24 hours before departure.', 'MMT', '#e12d2d'],
  ['Naukri', 'noreply@naukri.com', 'Recruiters viewed your profile 9 times', 'Update your profile to improve your visibility to recruiters.', 'N', '#4a90e2'],
  ['Udemy', 'no-reply@e.udemymail.com', 'Your course has a new coding exercise', 'Practice React state management with a new hands-on challenge.', 'U', '#a435f0'],
  ['Quora Digest', 'digest-noreply@quora.com', 'What do senior engineers notice in frontend interviews?', 'Top answers selected for you from software engineering topics.', 'Q', '#b92b27'],
  ['Reddit', 'noreply@redditmail.com', 'Trending in r/webdev: CSS architecture in 2026', 'A discussion you may like has 1.4k upvotes.', 'r/', '#ff4500'],
  ['Spotify', 'no-reply@spotify.com', 'Your Release Radar is ready', 'Listen to new releases picked for you this Friday.', 'S', '#1db954'],
  ['Uber', 'uber.india@uber.com', 'Your Thursday evening trip receipt', 'Thanks for riding with us. Total paid: ₹286.40.', 'U', '#000000'],
  ['IRCTC', 'ticketadmin@irctc.co.in', 'Electronic Reservation Slip', 'Your e-ticket for train 12785 is confirmed.', 'IR', '#174f86'],
  ['Adobe', 'mail@mail.adobe.com', 'Your Creative Cloud monthly update', 'Explore new features added to Photoshop and Illustrator.', 'A', '#e2231a'],
  ['Google Photos', 'noreply-photos@google.com', 'A memory from this week', 'Rediscover photos from your trip two years ago.', 'G', '#ea4335'],
  ['PhonePe', 'noreply@phonepe.com', 'Payment of ₹560 successful', 'Your payment to BESCOM was completed successfully.', 'Pe', '#5f259f'],
  ['Urban Company', 'no-reply@urbancompany.com', 'Booking confirmed for Sunday', 'Your appliance service professional will arrive between 10–11 AM.', 'UC', '#6e42e5'],
  ['The Ken', 'noreply@the-ken.com', 'The business of building India’s AI stack', 'Today’s subscriber story is a 9-minute read.', 'K', '#f15a24'],
  ['Substack', 'noreply@substack.com', 'New post from Pragmatic Engineer', 'How high-performing product engineering teams plan their week.', 'S', '#ff6719'],
  ['GitLab', 'notifications@gitlab.com', 'Pipeline #214 passed', 'All jobs passed for feature/gmail-responsive-layout.', 'GL', '#fc6d26'],
  ['AWS', 'no-reply-aws@amazon.com', 'Your AWS monthly bill is available', 'View your current charges and usage breakdown.', 'aws', '#ff9900'],
  ['Vercel', 'notifications@vercel.com', 'Deployment completed successfully', 'gmail-ui-production is live and ready to inspect.', 'V', '#000000'],
  ['Discord', 'noreply@discord.com', 'You have messages waiting', 'There are new messages in Frontend Developers India.', 'D', '#5865f2'],
  ['BookMyShow', 'tickets@bookmyshow.email', 'Your booking is confirmed!', 'Two tickets for your Friday evening show are attached to your account.', 'B', '#d62846'],
  ['Cleartrip', 'no-reply@cleartrip.com', 'Price drop alert: Bengaluru flights', 'Fares are lower for the dates you were tracking.', 'C', '#f77728'],
  ['Times Internet', 'newsletter@timesinternet.in', 'Your morning briefing', 'Top technology, business, and India stories in five minutes.', 'T', '#e21b22'],
  ['Google Drive', 'drive-shares-dm-noreply@google.com', 'Sanjay shared “Q3 Product Roadmap” with you', 'Sanjay invited you to edit a document in Google Drive.', 'G', '#0f9d58']
];

const dateSlots = [
  '2026-08-14T20:05:00+05:30','2026-08-14T19:50:00+05:30','2026-08-14T19:35:00+05:30','2026-08-14T19:20:00+05:30','2026-08-14T17:45:00+05:30','2026-08-14T16:08:00+05:30','2026-08-14T14:32:00+05:30','2026-08-14T12:20:00+05:30','2026-08-14T10:44:00+05:30','2026-08-14T09:15:00+05:30','2026-08-14T07:38:00+05:30',
  '2026-08-13T21:04:00+05:30','2026-08-13T18:12:00+05:30','2026-08-13T15:27:00+05:30','2026-08-13T12:05:00+05:30','2026-08-13T09:16:00+05:30',
  '2026-08-12T22:10:00+05:30','2026-08-12T17:48:00+05:30','2026-08-12T13:26:00+05:30','2026-08-12T08:30:00+05:30',
  '2026-08-11T20:42:00+05:30','2026-08-11T16:15:00+05:30','2026-08-11T11:09:00+05:30','2026-08-11T07:22:00+05:30',
  '2026-08-10T19:18:00+05:30','2026-08-10T14:41:00+05:30','2026-08-10T09:55:00+05:30',
  '2026-08-09T21:13:00+05:30','2026-08-09T17:02:00+05:30','2026-08-09T12:37:00+05:30','2026-08-09T08:06:00+05:30',
  '2026-08-08T19:49:00+05:30','2026-08-08T15:22:00+05:30','2026-08-08T10:34:00+05:30',
  '2026-08-07T22:06:00+05:30','2026-08-07T18:28:00+05:30','2026-08-07T14:16:00+05:30','2026-08-07T09:47:00+05:30',
  '2026-08-06T21:51:00+05:30','2026-08-06T17:33:00+05:30','2026-08-06T13:08:00+05:30','2026-08-06T08:19:00+05:30',
  '2026-08-05T23:02:00+05:30','2026-08-05T20:40:00+05:30','2026-08-05T18:21:00+05:30','2026-08-05T16:09:00+05:30','2026-08-05T14:02:00+05:30','2026-08-05T12:18:00+05:30','2026-08-05T10:31:00+05:30','2026-08-05T09:05:00+05:30'
];

const unreadIndices = new Set([0, 1, 2, 3, 5, 7, 8, 10, 11, 13, 14, 18, 22, 26, 31, 37, 43, 48]);

const emails = messageSeeds.slice(0, 50).map((seed, index) => ({
  id: index + 1,
  sender: seed[0],
  email: seed[1],
  subject: seed[2],
  snippet: seed[3],
  avatar: seed[4],
  color: seed[5],
  hasAttachment: Boolean(seed[6]),
  date: dateSlots[index],
  unread: unreadIndices.has(index),
  starred: [4, 12, 23, 38].includes(index),
  selected: false
}));

const els = {
  inboxView: document.getElementById('inbox-view'),
  detailView: document.getElementById('detail-view'),
  emailList: document.getElementById('email-list'),
  emptyState: document.getElementById('empty-state'),
  search: document.getElementById('mail-search'),
  selectAll: document.getElementById('select-all'),
  range: document.getElementById('range-label'),
  unreadCount: document.getElementById('inbox-unread-count'),
  mobileCompose: document.getElementById('mobile-compose'),
  compose: document.getElementById('compose-window'),
  recipientToggle: document.getElementById('recipient-toggle'),
  recipientPopover: document.getElementById('recipient-popover'),
  toast: document.getElementById('toast')
};

let currentMessageId = null;
let toastTimer;

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
}

function formatRowDate(isoDate) {
  const date = new Date(isoDate);
  if (isoDate.startsWith(TODAY)) {
    return new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true }).format(date).toUpperCase();
  }
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
}

function formatFullDate(isoDate) {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true
  }).format(date);
}

function getFilteredEmails() {
  const query = els.search.value.trim().toLowerCase();
  if (!query) return emails;
  return emails.filter(mail => `${mail.sender} ${mail.email} ${mail.subject} ${mail.snippet}`.toLowerCase().includes(query));
}

function renderInbox() {
  const filtered = getFilteredEmails();
  els.emailList.innerHTML = filtered.map(mail => `
    <div class="email-row${mail.unread ? ' unread' : ''}${mail.selected ? ' selected' : ''}" role="listitem" tabindex="0" data-id="${mail.id}" aria-label="${escapeHtml(mail.unread ? 'Unread' : 'Read')} email from ${escapeHtml(mail.sender)}: ${escapeHtml(mail.subject)}">
      <i class="fa-solid fa-grip-lines-vertical row-grab" aria-hidden="true"></i>
      <label class="row-check" title="Select"><input type="checkbox" ${mail.selected ? 'checked' : ''} aria-label="Select email from ${escapeHtml(mail.sender)}"><span></span></label>
      <button class="row-icon star-button${mail.starred ? ' starred' : ''}" type="button" aria-label="${mail.starred ? 'Unstar' : 'Star'} ${escapeHtml(mail.subject)}"><i class="fa-${mail.starred ? 'solid' : 'regular'} fa-star"></i></button>
      <span class="row-sender">${escapeHtml(mail.sender)}</span>
      <span class="row-content"><span class="row-subject">${escapeHtml(mail.subject)}</span><span class="row-snippet">- ${escapeHtml(mail.snippet)}</span>${mail.hasAttachment ? '<i class="fa-solid fa-paperclip row-attachment" title="Attachment"></i>' : ''}</span>
      <span class="row-date">${escapeHtml(formatRowDate(mail.date))}</span>
      <span class="row-hover-actions" aria-hidden="true"><button class="row-icon" type="button" title="Archive"><i class="fa-solid fa-box-archive"></i></button><button class="row-icon" type="button" title="Delete"><i class="fa-solid fa-trash-can"></i></button><button class="row-icon" type="button" title="Mark as ${mail.unread ? 'read' : 'unread'}"><i class="fa-${mail.unread ? 'regular fa-envelope-open' : 'regular fa-envelope'}"></i></button><button class="row-icon" type="button" title="Snooze"><i class="fa-regular fa-clock"></i></button></span>
    </div>`).join('');

  els.emptyState.hidden = filtered.length !== 0;
  els.range.textContent = filtered.length === 50 ? '1–50 of 4,814' : filtered.length ? `1–${filtered.length} of ${filtered.length}` : '0 of 0';
  updateUnreadCount();
  els.selectAll.checked = filtered.length > 0 && filtered.every(mail => mail.selected);
}

function updateUnreadCount() {
  const unread = emails.filter(mail => mail.unread).length;
  els.unreadCount.textContent = unread;
  document.title = `Inbox (${unread}) - Gmail`;
}

function isSbi(mail) {
  return mail.email === SBI_SENDER;
}

function bodyFor(mail) {
  if (isSbi(mail)) {
    return `
      <p>Dear Miss. KATIKALA SAIKALA,</p>
      <p>Your account(s) details are available at your fingertips. You can view them online whenever required. For your convenience, please find attached your latest monthly statement.</p>
      <p>Your e-account statement is protected by a password, which is the last five digits of customer registered mobile number and date of birth (DOB) in DDMMYY format registered with Bank, for example if mobile number is XXXXX12345 and DOB is 16th September 1982 then password will be 12345160982.</p>
      <p>In case of any issues, please lodge a complaint online at <a href="mailto:contactcentre@sbi.co.in">contactcentre@sbi.co.in</a> or by calling our 1800 1234 or 1800 2100 toll free numbers or by contacting your home branch.</p>
      <p class="signature">With Best Regards,<br><strong>Team SBI</strong></p>
      <p class="computer-note"><strong>** Please note:</strong> You will need Adobe Acrobat to open the attachment. Please do not reply to this email as it is a computer generated email.</p>`;
  }

  return `
    <p>Hi Sasi,</p>
    <p>${escapeHtml(mail.snippet)}</p>
    <div class="callout"><strong>${escapeHtml(mail.subject)}</strong><br>Open this message to review the latest information and any actions that may be relevant to you.</div>
    <a class="email-button" href="#" data-demo-link>View details</a>
    <p class="signature">Regards,<br><strong>${escapeHtml(mail.sender)} team</strong></p>`;
}

function openMessage(id) {
  const mail = emails.find(item => item.id === id);
  if (!mail) return;
  currentMessageId = id;
  mail.unread = false;
  updateUnreadCount();

  document.getElementById('detail-subject').textContent = mail.subject;
  document.getElementById('detail-sender').textContent = isSbi(mail) ? mail.email : mail.sender;
  document.getElementById('detail-email').textContent = isSbi(mail) ? '' : `<${mail.email}>`;
  document.getElementById('detail-date').textContent = formatFullDate(mail.date);
  document.getElementById('detail-position').textContent = `${emails.findIndex(item => item.id === id) + 1} of 4,814`;
  document.getElementById('detail-body').innerHTML = bodyFor(mail);
  document.getElementById('recipient-from').textContent = mail.email;
  document.getElementById('recipient-date').textContent = formatFullDate(mail.date);
  document.getElementById('recipient-subject').textContent = mail.subject;
  const senderDomain = mail.email.split('@')[1] || mail.email;
  document.getElementById('recipient-mailedby').textContent = senderDomain;
  document.getElementById('recipient-signedby').textContent = senderDomain;
  document.getElementById('recipient-unsubscribe-label').hidden = !isSbi(mail);
  document.getElementById('recipient-unsubscribe-value').hidden = !isSbi(mail);
  els.recipientPopover.hidden = true;
  els.recipientToggle.setAttribute('aria-expanded', 'false');
  document.querySelector('.subject-chevron').classList.toggle('important', isSbi(mail));
  document.getElementById('verified-badge').hidden = !isSbi(mail);

  const avatar = document.getElementById('sender-avatar');
  avatar.classList.toggle('bank-avatar', isSbi(mail));
  document.querySelector('.sender-line').classList.toggle('sbi-sender', isSbi(mail));
  avatar.innerHTML = isSbi(mail) ? '<img src="./assets/sbi-logo.png" alt="SBI">' : escapeHtml(mail.avatar);
  avatar.style.background = isSbi(mail) ? '' : mail.color;

  const unsubscribe = document.getElementById('detail-unsubscribe');
  unsubscribe.hidden = !isSbi(mail);
  document.getElementById('detail-attachment-indicator').hidden = !mail.hasAttachment;

  const detailStar = document.getElementById('detail-star');
  detailStar.classList.toggle('starred', mail.starred);
  detailStar.innerHTML = `<i class="fa-${mail.starred ? 'solid' : 'regular'} fa-star"></i>`;
  detailStar.style.color = mail.starred ? '#f4b400' : '';

  const attachmentArea = document.getElementById('attachment-area');
  if (mail.hasAttachment) {
    attachmentArea.hidden = false;
    attachmentArea.innerHTML = `
      <div class="attachment-heading">
        <div><strong>One attachment</strong><span class="attachment-dot">•</span><span>Scanned by Gmail</span><span class="gmail-info" title="Gmail scans attachments for suspicious content" aria-label="Attachment scan information">i</span></div>
        <button class="add-drive-heading" type="button" data-drive-action><i class="fa-brands fa-google-drive"></i><span>Add to Drive</span></button>
      </div>
      <div class="encrypted-warning" role="note">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p><strong>Encrypted attachment warning</strong><span> – Be careful with this attachment. This message contains 1 encrypted attachment that can't be scanned for malicious content. Avoid downloading it unless you know the sender and are confident that this email is legitimate.</span></p>
      </div>
      <div class="attachment-preview" tabindex="0" role="button" aria-label="Download AccountStatement 13082026 211903 PDF" data-attachment-download>
        <div class="attachment-thumbnail"><span class="large-pdf-icon">PDF</span></div>
        <div class="attachment-caption">
          <span class="small-pdf-icon">PDF</span>
          <strong>AccountStatement_13082026_211903.pdf</strong>
        </div>
        <div class="attachment-hover-card">
          <span class="small-pdf-icon">PDF</span>
          <div class="attachment-hover-info"><strong>AccountStatement_<br>13082026_211903.pdf</strong><span>3.0 MB</span></div>
          <div class="attachment-buttons">
            <a class="attachment-action" href="${SBI_ATTACHMENT}" download="AccountStatement_13082026_211903.pdf" aria-label="Download attachment" title="Download"><i class="fa-solid fa-download"></i></a>
            <button class="attachment-action" type="button" data-drive-action aria-label="Add attachment to Drive" title="Add to Drive"><i class="fa-brands fa-google-drive"></i><b>+</b></button>
          </div>
        </div>
        <span class="fold-grey"></span><span class="fold-red"></span>
      </div>`;
  } else {
    attachmentArea.hidden = true;
    attachmentArea.innerHTML = '';
  }

  els.inboxView.hidden = true;
  els.detailView.hidden = false;
  els.mobileCompose.hidden = true;
  els.detailView.scrollTop = 0;
}

function closeMessage() {
  closeRecipientPopover();
  els.detailView.hidden = true;
  els.inboxView.hidden = false;
  els.mobileCompose.hidden = false;
  renderInbox();
  requestAnimationFrame(() => {
    const row = els.emailList.querySelector(`[data-id="${currentMessageId}"]`);
    if (row) row.focus({ preventScroll: true });
  });
}

function closeRecipientPopover() {
  els.recipientPopover.hidden = true;
  els.recipientToggle.setAttribute('aria-expanded', 'false');
}

function showToast(message) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add('show');
  toastTimer = setTimeout(() => els.toast.classList.remove('show'), 2200);
}

els.emailList.addEventListener('click', event => {
  const row = event.target.closest('.email-row');
  if (!row) return;
  const mail = emails.find(item => item.id === Number(row.dataset.id));
  if (!mail) return;

  if (event.target.closest('.star-button')) {
    mail.starred = !mail.starred;
    renderInbox();
    return;
  }
  if (event.target.closest('.row-check')) {
    mail.selected = !mail.selected;
    renderInbox();
    return;
  }
  if (event.target.closest('.row-hover-actions')) {
    showToast('Action available in this inbox demo');
    return;
  }
  openMessage(mail.id);
});

els.emailList.addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('email-row')) {
    event.preventDefault();
    openMessage(Number(event.target.dataset.id));
  }
});

els.search.addEventListener('input', () => {
  if (!els.detailView.hidden) closeMessage();
  renderInbox();
});

els.selectAll.addEventListener('change', () => {
  const filteredIds = new Set(getFilteredEmails().map(mail => mail.id));
  emails.forEach(mail => { if (filteredIds.has(mail.id)) mail.selected = els.selectAll.checked; });
  renderInbox();
});

document.getElementById('back-button').addEventListener('click', closeMessage);
document.getElementById('brand-home').addEventListener('click', closeMessage);
document.querySelector('.folder.active').addEventListener('click', closeMessage);

document.getElementById('detail-star').addEventListener('click', () => {
  const mail = emails.find(item => item.id === currentMessageId);
  if (!mail) return;
  mail.starred = !mail.starred;
  openMessage(mail.id);
});

els.recipientToggle.addEventListener('click', event => {
  event.stopPropagation();
  const willOpen = els.recipientPopover.hidden;
  els.recipientPopover.hidden = !willOpen;
  els.recipientToggle.setAttribute('aria-expanded', String(willOpen));
});

document.getElementById('refresh-button').addEventListener('click', event => {
  const icon = event.currentTarget.querySelector('i');
  icon.style.transition = 'transform .45s ease';
  icon.style.transform = 'rotate(360deg)';
  setTimeout(() => { icon.style.transition = ''; icon.style.transform = ''; showToast('Inbox refreshed'); }, 460);
});

document.querySelectorAll('.category').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.category').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    if (!tab.textContent.includes('Primary')) showToast(`${tab.textContent.trim()} category selected`);
  });
});

function openCompose() {
  els.compose.hidden = false;
  els.compose.querySelector('input').focus();
}

document.getElementById('compose-button').addEventListener('click', openCompose);
document.getElementById('mobile-compose').addEventListener('click', openCompose);
document.getElementById('close-compose').addEventListener('click', () => { els.compose.hidden = true; });
document.getElementById('discard-button').addEventListener('click', () => { els.compose.hidden = true; showToast('Draft discarded'); });
document.getElementById('send-button').addEventListener('click', () => { els.compose.hidden = true; showToast('Message sent'); });

document.addEventListener('click', event => {
  if (!els.recipientPopover.hidden && !event.target.closest('.sender-meta')) closeRecipientPopover();

  if (event.target.closest('[data-demo-link]')) {
    event.preventDefault();
    showToast('This link is part of the inbox demo');
  }
  const driveAction = event.target.closest('[data-drive-action]');
  if (driveAction) {
    event.preventDefault();
    event.stopPropagation();
    showToast('Attachment ready to add to Drive');
    return;
  }

  const attachmentPreview = event.target.closest('[data-attachment-download]');
  if (attachmentPreview && !event.target.closest('.attachment-action')) {
    const downloadLink = attachmentPreview.querySelector('a[download]');
    if (downloadLink) downloadLink.click();
  }

  if (event.target.closest('a[download]')) showToast('Downloading SBI statement…');
});

document.addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-attachment-download]')) {
    event.preventDefault();
    const downloadLink = event.target.querySelector('a[download]');
    if (downloadLink) downloadLink.click();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (!els.recipientPopover.hidden) {
      closeRecipientPopover();
      els.recipientToggle.focus();
    } else if (!els.compose.hidden) els.compose.hidden = true;
    else if (!els.detailView.hidden) closeMessage();
  }
});

renderInbox();
