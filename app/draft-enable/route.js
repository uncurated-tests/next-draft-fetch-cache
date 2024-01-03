import { draftMode } from 'next/headers'

export function GET() {
  draftMode().enable()
  return new Response('Draft Mode is enable (check cookies)')
}
