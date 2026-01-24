import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password | Agni Arena',
  description: 'Reset your Agni Arena password.',
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
