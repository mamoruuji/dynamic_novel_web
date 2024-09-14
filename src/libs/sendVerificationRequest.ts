import { Resend } from 'resend'
import MagicLinkEmail from '/emails/MagicLinkEmail'

export async function sendVerificationRequest(params) {
  const { identifier, url, provider, theme } = params
  const { host } = new URL(url)

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const data = await resend.emails.send({
      from: 'dynamicNovel@resend.dev',
      to: [identifier],
      subject: `Log in to ${host}`,
      text: text({ url, host }),
      react: MagicLinkEmail({ url, host })
    })
    return { success: true, data }
  } catch (error) {
    throw new Error('Failed to send the verification Email.')
  }
}

function text({ url, host }) {
  return `Sign in to ${host}\n${url}\n\n`
}
