import React from 'react'

import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Link
} from '@react-email/components'

export default function MagicLinkEmail({ url, host }) {
  return (
    <Html>
      <Head />
      <Preview>DynamicNovelにサインイン</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>マジックリンクで {host} にサインイン</Heading>
          <Text style={paragraph}>
            以下のリンクをクリックして、アカウントにサインインしてください:
          </Text>
          <Link href={url} style={link}>
            アカウントにサインイン
          </Link>
          <Text style={paragraph}>
            もしこのメールに心当たりがない場合は、このメールを無視してください。
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
}

const container = {
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '0 auto',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
}

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '20px',
}

const link = {
  display: 'inline-block',
  backgroundColor: '#007bff',
  color: '#ffffff',
  padding: '10px 20px',
  borderRadius: '4px',
  textDecoration: 'none',
}
