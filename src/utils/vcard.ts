import type { ProfileConfig } from '../types';

/**
 * Generates an RFC 6350 / vCard 3.0 string and downloads it as a `.vcf` file.
 * This is recognized natively by iOS (Contacts.app) and Android (Google Contacts).
 */
export function generateVCard(config: ProfileConfig): void {
  const { vCard } = config;

  const lines: string[] = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${escapeVCardValue(vCard.lastName)};${escapeVCardValue(vCard.firstName)};;;`,
    `FN:${escapeVCardValue(`${vCard.firstName} ${vCard.lastName}`.trim())}`,
  ];

  if (vCard.organization) {
    lines.push(`ORG:${escapeVCardValue(vCard.organization)}`);
  }

  if (vCard.jobTitle) {
    lines.push(`TITLE:${escapeVCardValue(vCard.jobTitle)}`);
  }

  if (vCard.phone) {
    lines.push(`TEL;TYPE=CELL,VOICE:${vCard.phone}`);
  }

  if (vCard.email) {
    lines.push(`EMAIL;TYPE=WORK,INTERNET:${vCard.email}`);
  }

  if (vCard.website) {
    lines.push(`URL:${vCard.website}`);
  }

  if (vCard.street || vCard.city || vCard.state || vCard.postalCode || vCard.country) {
    lines.push(
      `ADR;TYPE=WORK:;;${escapeVCardValue(vCard.street || '')};${escapeVCardValue(
        vCard.city || ''
      )};${escapeVCardValue(vCard.state || '')};${escapeVCardValue(
        vCard.postalCode || ''
      )};${escapeVCardValue(vCard.country || '')}`
    );
  }

  if (vCard.note) {
    lines.push(`NOTE:${escapeVCardValue(vCard.note)}`);
  }

  // Set revision timestamp
  lines.push(`REV:${new Date().toISOString()}`);
  lines.push('END:VCARD');

  const vCardContent = lines.join('\r\n');
  const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });

  const safeFileName = `${(vCard.firstName || 'contact').toLowerCase()}_${(
    vCard.lastName || 'card'
  ).toLowerCase()}.vcf`;

  // Trigger download
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', safeFileName);
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function escapeVCardValue(val: string): string {
  return val
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}
